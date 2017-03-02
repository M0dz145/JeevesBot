import {CONFIG} from './constants/constants'
import commandsRouter from "./modules/moduleRouter"

export default class Annyang {
    constructor() {
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;
        if(!this.SpeechRecognition) {
            throw 'Le navigateur ne supporte pas la reconnaissance vocale'
        }

        this.commandsList = [];
        this.recognition;
        this.callbacks = {
            start: [],
            error: [],
            end: [],
            soundstart: [],
            result: [],
            resultMatch: [],
            resultNoMatch: [],
            errorNetwork: [],
            errorPermissionBlocked: [],
            errorPermissionDenied: []
        };
        this.autoRestart;
        this.lastStartedAt = 0;
        this.autoRestartCount = 0;
        this.debugState = true;
        this.debugStyle = 'font-weight: bold; color: #f00;';
        this.pauseListening = false;
        this._isListening = false;
    }

    // method for logging in developer console when debug mode is on
    logMessage(text, extraParameters) {
        if (text.indexOf('%c') === -1 && !extraParameters) {
            return console.log(text)
        } else {
            return console.log(text, extraParameters || this.getDebugStyle())
        }
    }

    isInitialized() {
        return this.getRecognition() !== undefined;
    }

    initIfNeeded() {
        if(!this.isInitialized()) {
            this.init({}, false);
        }
    }

    registerCommand(command, callback, originalPhrase) {
        this.getCommandsList().push({command: command, callback: callback, originalPhrase: originalPhrase});
        if(this.getDebugState()) {
            this.logMessage('Command successfully loaded: %c' + originalPhrase, this.getDebugStyle());
        }
    }

    parseResults(results) {
        let commandText;
        // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
        for(var i = 0; i < results.length; i++) {
            // the text recognized
            commandText = results[i].trim();
            if(this.getDebugState()) {
                this.logMessage('Speech recognized: %c' + commandText, this.getDebugStyle());
            }

            let commandFinded = commandsRouter.matchRoute(commandText);

            if(commandFinded) {
                return;
            }

        }
        // invokeCallbacks(callbacks.resultNoMatch, results);
    }


    /**
     * Initialize annyang with a list of commands to recognize.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello :name': helloFunction};
     * var commands2 = {'hi': helloFunction};
     *
     * // initialize annyang, overwriting any previously added commands
     * annyang.init(commands, true);
     * // adds an additional command without removing the previous commands
     * annyang.init(commands2, false);
     * ````
     * As of v1.1.0 it is no longer required to call init(). Just start() listening whenever you want, and addCommands() whenever, and as often as you like.
     *
     * @param {Object} commands - Commands that annyang should listen to
     * @param {boolean} [resetCommands=true] - Remove all commands before initializing?
     * @method init
     * @deprecated
     * @see [Commands Object](#commands-object)
     */
    init(commands) {
        var resetCommands = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        // Abort previous instances of recognition already running
        if(this.getRecognition() && this.getRecognition().abort) {
            this.getRecognition().abort();
        }

        // initiate SpeechRecognition
        this.recognition = new this.getSpeechRecognition()();

        // Set the max number of alternative transcripts to try and match with a command
        this.getRecognition().maxAlternatives = 5;

        // In HTTPS, turn off continuous mode for faster results.
        // In HTTP,  turn on  continuous mode for much slower results, but no repeating security notices
        this.getRecognition().continuous = window.location.protocol === 'http:';

        // Sets the language to the default 'en-US'. This can be changed with annyang.setLanguage()
        this.getRecognition().lang = 'en-US';

        this.getRecognition().onstart = function() {
            this._isListening = true;
            invokeCallbacks(this.getCallbacks().start);
        };

        this.getRecognition().onsoundstart = function() {
            invokeCallbacks(this.getCallbacks().soundstart);
        };

        this.getRecognition().onerror = function(event) {
            invokeCallbacks(this.getCallbacks().error, event);
            switch(event.error) {
                case 'network':
                    invokeCallbacks(this.getCallbacks().errorNetwork, event);
                    break;
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    this.autoRestart = false;
                    // determine if permission was denied by user or automatically.
                    if(new Date().getTime() - this.getLastStartedAt() < 200) {
                        invokeCallbacks(this.getCallbacks().errorPermissionBlocked, event);
                    } else {
                        invokeCallbacks(this.getCallbacks().errorPermissionDenied, event);
                    }
                    break;
            }
        };

        this.getRecognition().onend = function() {
            this._isListening = false;
            invokeCallbacks(this.getCallbacks().end);
            // annyang will auto restart if it is closed automatically and not by user action.
            if(this.getAutoRestart()) {
                // play nicely with the browser, and never restart annyang automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - this.getLastStartedAt();
                this.autoRestartCount += 1;
                if(this.getAutoRestartCount() % 10 === 0) {
                    if(this.getDebugState()) {
                        this.logMessage('Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips.');
                    }
                }
                if(timeSinceLastStart < 1000) {
                    setTimeout(function() {
                        this.start({paused: this.getPauseListening()});
                    }, 1000 - timeSinceLastStart);
                } else {
                    this.start({paused: this.getPauseListening()});
                }
            }
        };

        this.getRecognition().onresult = function(event) {
            if(this.getPauseListening()) {
                if(this.getDebugState()) {
                    this.logMessage('Speech heard, but annyang is paused');
                }
                return false;
            }

            // Map the results to an array
            let SpeechRecognitionResult = event.results[event.resultIndex],
                results = [];

            for(var k = 0; k < SpeechRecognitionResult.length; k++) {
                results[k] = SpeechRecognitionResult[k].transcript;
            }

            this.parseResults(results);
        };

        // build commands list
        if(resetCommands) {
            this.commandsList = [];
        }
        if(commands.length) {
            this.addCommands(commands);
        }
    }

    /**
     * Start listening.
     * It's a good idea to call this after adding some commands first, but not mandatory.
     *
     * Receives an optional options object which supports the following options:
     *
     * - `autoRestart`  (boolean, default: true) Should annyang restart itself if it is closed indirectly, because of silence or window conflicts?
     * - `continuous`   (boolean) Allow forcing continuous mode on or off. Annyang is pretty smart about this, so only set this if you know what you're doing.
     * - `paused`       (boolean, default: true) Start annyang in paused mode.
     *
     * #### Examples:
     * ````javascript
     * // Start listening, don't restart automatically
     * annyang.start({ autoRestart: false });
     * // Start listening, don't restart automatically, stop recognition after first phrase recognized
     * annyang.start({ autoRestart: false, continuous: false });
     * ````
     * @param {Object} [options] - Optional options.
     * @method start
     */
    start(options) {
        this.initIfNeeded();
        options = options || {};
        if(options.paused !== undefined) {
            this.pauseListening = !!options.paused;
        } else {
            this.pauseListening = false;
        }
        if(options.autoRestart !== undefined) {
            this.autoRestart = !!options.autoRestart;
        } else {
            this.autoRestart = true;
        }
        if(options.continuous !== undefined) {
            this.recognition.continuous = !!options.continuous;
        }

        this.lastStartedAt = new Date().getTime();
        try {
            this.recognition.start();
        } catch(e) {
            if(this.getDebugState()) {
                this.logMessage(e.message);
            }
        }
    }

    /**
     * Stop listening, and turn off mic.
     *
     * Alternatively, to only temporarily pause annyang responding to commands without stopping the SpeechRecognition engine or closing the mic, use pause() instead.
     * @see [pause()](#pause)
     *
     * @method abort
     */
    abort() {
        this.autoRestart = false;
        this.autoRestartCount = 0;
        if(this.isInitialized()) {
            this.getRecognition().abort();
        }
    }

    /**
     * Pause listening. annyang will stop responding to commands (until the resume or start methods are called), without turning off the browser's SpeechRecognition engine or the mic.
     *
     * Alternatively, to stop the SpeechRecognition engine and close the mic, use abort() instead.
     * @see [abort()](#abort)
     *
     * @method pause
     */
    pause() {
        this.pauseListening = true;
    }

    /**
     * Resumes listening and restores command callback execution when a result matches.
     * If SpeechRecognition was aborted (stopped), start it.
     *
     * @method resume
     */
    resume() {
        this.start();
    }

    /**
     * Turn on output of debug messages to the console. Ugly, but super-handy!
     *
     * @param {boolean} [newState=true] - Turn on/off debug messages
     * @method debug
     */
    debug() {
        var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        this.debugState = !!newState;
    }

    /**
     * Set the language the user will speak in. If this method is not called, defaults to 'en-US'.
     *
     * @param {String} language - The language (locale)
     * @method setLanguage
     * @see [Languages](https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported)
     */
    setLanguage(language) {
        this.initIfNeeded();
        this.recognition.lang = language;
    }

    /**
     * Add commands that annyang will respond to. Similar in syntax to init(), but doesn't remove existing commands.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello :name': helloFunction, 'howdy': helloFunction};
     * var commands2 = {'hi': helloFunction};
     *
     * annyang.addCommands(commands);
     * annyang.addCommands(commands2);
     * // annyang will now listen to all three commands
     * ````
     *
     * @param {Object} commands - Commands that annyang should listen to
     * @method addCommands
     * @see [Commands Object](#commands-object)
     */
    addCommands(commands) {
        var cb;

        this.initIfNeeded();

        for(var phrase in commands) {
            if(commands.hasOwnProperty(phrase)) {
                cb = window[commands[phrase]] || commands[phrase];
                if(typeof cb === 'function') {
                    // convert command to regex then register the command
                    // this.registerCommand(commandToRegExp(phrase), cb, phrase);
                } else if((typeof cb === 'undefined' ? 'undefined' : _typeof(cb)) === 'object' && cb.regexp instanceof RegExp) {
                    // register the command
                    this.registerCommand(new RegExp(cb.regexp.source, 'i'), cb.callback, phrase);
                } else {
                    if(this.getDebugState()) {
                        this.logMessage('Can not register command: %c' + phrase, this.getDebugStyle());
                    }
                    continue;
                }
            }
        }
    }

    /**
     * Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello': helloFunction, 'howdy': helloFunction, 'hi': helloFunction};
     *
     * // Remove all existing commands
     * annyang.removeCommands();
     *
     * // Add some commands
     * annyang.addCommands(commands);
     *
     * // Don't respond to hello
     * annyang.removeCommands('hello');
     *
     * // Don't respond to howdy or hi
     * annyang.removeCommands(['howdy', 'hi']);
     * ````
     * @param {String|Array|Undefined} [commandsToRemove] - Commands to remove
     * @method removeCommands
     */
    removeCommands(commandsToRemove) {
        if(commandsToRemove === undefined) {
            this.commandsList = [];
        } else {
            commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
            this.commandsList = this.getCommandsList().filter(function(command) {
                for(var i = 0; i < commandsToRemove.length; i++) {
                    if(commandsToRemove[i] === command.originalPhrase) {
                        return false;
                    }
                }
                return true;
            });
        }
    }

    /**
     * Add a callback function to be called in case one of the following events happens:
     *
     * * `start` - Fired as soon as the browser's Speech Recognition engine starts listening
     * * `soundstart` - Fired as soon as any sound (possibly speech) has been detected.
     *     This will fire once per Speech Recognition starting. See https://is.gd/annyang_sound_start
     * * `error` - Fired when the browser's Speech Recogntion engine returns an error, this generic error callback will be followed by more accurate error callbacks (both will fire if both are defined)
     *     Callback function will be called with the error event as the first argument
     * * `errorNetwork` - Fired when Speech Recognition fails because of a network error
     *     Callback function will be called with the error event as the first argument
     * * `errorPermissionBlocked` - Fired when the browser blocks the permission request to use Speech Recognition.
     *     Callback function will be called with the error event as the first argument
     * * `errorPermissionDenied` - Fired when the user blocks the permission request to use Speech Recognition.
     *     Callback function will be called with the error event as the first argument
     * * `end` - Fired when the browser's Speech Recognition engine stops
     * * `result` - Fired as soon as some speech was identified. This generic callback will be followed by either the `resultMatch` or `resultNoMatch` callbacks.
     *     Callback functions for to this event will be called with an array of possible phrases the user said as the first argument
     * * `resultMatch` - Fired when annyang was able to match between what the user said and a registered command
     *     Callback functions for this event will be called with three arguments in the following order:
     *       * The phrase the user said that matched a command
     *       * The command that was matched
     *       * An array of possible alternative phrases the user might have said
     * * `resultNoMatch` - Fired when what the user said didn't match any of the registered commands.
     *     Callback functions for this event will be called with an array of possible phrases the user might've said as the first argument
     *
     * #### Examples:
     * ````javascript
     * annyang.addCallback('error', function() {
     *   $('.myErrorText').text('There was an error!');
     * });
     *
     * annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
     *   console.log(userSaid); // sample output: 'hello'
     *   console.log(commandText); // sample output: 'hello (there)'
     *   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
     * });
     *
     * // pass local context to a global function called notConnected
     * annyang.addCallback('errorNetwork', notConnected, this);
     * ````
     * @param {String} type - Name of event that will trigger this callback
     * @param {Function} callback - The function to call when event is triggered
     * @param {Object} [context] - Optional context for the callback function
     * @method addCallback
     */
    addCallback(type, callback, context) {
        var cb = window[callback] || callback;
        if(typeof cb === 'function' && this.getCallbacks()[type] !== undefined) {
            this.getCallbacks()[type].push({callback: cb, context: context || this});
        }
    }

    /**
     * Remove callbacks from events.
     *
     * - Pass an event name and a callback command to remove that callback command from that event type.
     * - Pass just an event name to remove all callback commands from that event type.
     * - Pass undefined as event name and a callback command to remove that callback command from all event types.
     * - Pass no params to remove all callback commands from all event types.
     *
     * #### Examples:
     * ````javascript
     * annyang.addCallback('start', myFunction1);
     * annyang.addCallback('start', myFunction2);
     * annyang.addCallback('end', myFunction1);
     * annyang.addCallback('end', myFunction2);
     *
     * // Remove all callbacks from all events:
     * annyang.removeCallback();
     *
     * // Remove all callbacks attached to end event:
     * annyang.removeCallback('end');
     *
     * // Remove myFunction2 from being called on start:
     * annyang.removeCallback('start', myFunction2);
     *
     * // Remove myFunction1 from being called on all events:
     * annyang.removeCallback(undefined, myFunction1);
     * ````
     *
     * @param type Name of event type to remove callback from
     * @param callback The callback function to remove
     * @returns undefined
     * @method removeCallback
     */
    removeCallback(type, callback) {
        let compareWithCallbackParameter = function compareWithCallbackParameter(cb) {
            return cb.callback !== callback;
        };
        // Go over each callback type in callbacks store object
        for(var callbackType in this.getCallbacks()) {
            if(this.getCallbacks().hasOwnProperty(callbackType)) {
                // if this is the type user asked to delete, or he asked to delete all, go ahead.
                if(type === undefined || type === callbackType) {
                    // If user asked to delete all callbacks in this type or all types
                    if(callback === undefined) {
                        this.callbacks[callbackType] = [];
                    } else {
                        // Remove all matching callbacks
                        this.callbacks[callbackType] = this.getCallbacks()[callbackType].filter(compareWithCallbackParameter);
                    }
                }
            }
        }
    }

    /**
     * Returns true if speech recognition is currently on.
     * Returns false if speech recognition is off or annyang is paused.
     *
     * @return boolean true = SpeechRecognition is on and annyang is listening
     * @method isListening
     */
    isListening() {
        return this.getIsListening() && !this.getPauseListening()
    }

    /**
     * Returns the instance of the browser's SpeechRecognition object used by annyang.
     * Useful in case you want direct access to the browser's Speech Recognition engine.
     *
     * @returns SpeechRecognition The browser's Speech Recognizer currently used by annyang
     * @method getSpeechRecognizer
     */
    getSpeechRecognizer() {
        return this.recognition;
    }

    /**
     * Simulate speech being recognized. This will trigger the same events and behavior as when the Speech Recognition
     * detects speech.
     *
     * Can accept either a string containing a single sentence, or an array containing multiple sentences to be checked
     * in order until one of them matches a command (similar to the way Speech Recognition Alternatives are parsed)
     *
     * #### Examples:
     * ````javascript
     * annyang.trigger('Time for some thrilling heroics');
     * annyang.trigger(
     *     ['Time for some thrilling heroics', 'Time for some thrilling aerobics']
     *   );
     * ````
     *
     * @param string|array sentences A sentence as a string or an array of strings of possible sentences
     * @returns undefined
     * @method trigger
     */
    trigger(sentences) {
        if(!this.isListening()) {
            if(this.getDebugState()) {
                if(!this.getIsListening()) {
                    this.logMessage('Cannot trigger while annyang is aborted');
                } else {
                    this.logMessage('Speech heard, but annyang is paused');
                }
            }
            return;
        }

        if(!Array.isArray(sentences)) {
            sentences = [sentences];
        }

        this.parseResults(sentences);
    }

    getSpeechRecognition() {
        return this.SpeechRecognition
    }

    getIsListening() {
        return this._isListening
    }

    getPauseListening() {
        return this.pauseListening
    }

    getDebugStyle() {
        return this.debugStyle
    }

    getDebugState() {
        return this.debugState
    }

    getAutoRestartCount() {
        return this.autoRestartCount
    }

    getLastStartedAt() {
        return this.lastStartedAt
    }

    getAutoRestart() {
        return this.autoRestart
    }

    getCallbacks() {
        return this.callbacks
    }

    getRecognition() {
        return this.recognition
    }

    getCommandsList() {
        return this.commandsList
    }




    // static removeCommands(command) {
    //     this.getAng().removeCommands(command)
    //     return this.getAng()
    // }
    //
    // static addCommanders(command) {
    //     let commands = {}
    //     if(Array.isArray(command)) {
    //         command.forEach((cmd) => {
    //             commands[cmd.getName()] = cmd.getCommand()
    //         })
    //     } else {
    //         commands[command.getName()] = command.getCommand()
    //     }
    //     this.getAng().addCommands(commands)
    //     return this.getAng()
    // }
    //
    // static start() {
    //     this.getAng().start({autoRestart: true})
    //     return this.getAng()
    // }
    //
    // static init() {
    //     this.getAng().setLanguage(CONFIG.LANG);
    //     return this.getAng()
    // }

}