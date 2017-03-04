import speak from "./speak"
import moduleRouter from "../../modules/moduleRouter"
import logger from "../../helpers/console/logger"
import HTMLController from "../../helpers/html/HTMLController"
import Humanize from "../../helpers/humanize/humanize"

export default class recognizer {
    constructor() {
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition
        if(!this.SpeechRecognition) {
            throw 'Le navigateur ne supporte pas la reconnaissance vocale'
        }

        this.recognition
        this.autoRestart
        this.lastStartedAt = 0
        this.autoRestartCount = 0
        this.pauseListening = false
        this._isListening = false
    }

    isInitialized() {
        return this.getRecognition() !== undefined
    }

    initIfNeeded() {
        if(!this.isInitialized()) {
            this.init({}, false)
        }
    }

    parseResults(results) {
        let commandText
        // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
        for(var i = 0; i < results.length; i++) {
            // the text recognized
            commandText = results[i].trim()
            logger.message('Speech recognized: %c' + commandText)

            let moduleFinded = moduleRouter.matchModule(new speak(commandText))

            if(moduleFinded) {
                return
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
    init() {
        // Abort previous instances of recognition already running
        if(this.getRecognition() && this.getRecognition().abort) {
            this.getRecognition().abort()
        }

        // initiate SpeechRecognition
        this.recognition = new this.SpeechRecognition()

        // Set the max number of alternative transcripts to try and match with a command
        this.getRecognition().maxAlternatives = 5

        // In HTTPS, turn off continuous mode for faster results.
        // In HTTP,  turn on  continuous mode for much slower results, but no repeating security notices
        this.getRecognition().continuous = window.location.protocol === 'http:'

        // Sets the language to the default 'en-US'. This can be changed with annyang.setLanguage()
        this.getRecognition().lang = 'fr-FR'

        this.getRecognition().onstart = () => {
            this._isListening = true
            // invokeCallbacks(this.getCallbacks().start)
        }

        this.getRecognition().onsoundstart = () => {
            // invokeCallbacks(this.getCallbacks().soundstart)
        }

        this.getRecognition().onerror = (event) => {
            // invokeCallbacks(this.getCallbacks().error, event)
            switch(event.error) {
                case 'network':
                    // invokeCallbacks(this.getCallbacks().errorNetwork, event)
                    break
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    this.autoRestart = false
                    // determine if permission was denied by user or automatically.
                    if(new Date().getTime() - this.getLastStartedAt() < 200) {
                        // invokeCallbacks(this.getCallbacks().errorPermissionBlocked, event)
                    } else {
                        // invokeCallbacks(this.getCallbacks().errorPermissionDenied, event)
                    }
                    break
            }
        }

        this.getRecognition().onend = () => {
            this._isListening = false
            // invokeCallbacks(this.getCallbacks().end)
            // annyang will auto restart if it is closed automatically and not by user action.
            if(this.getAutoRestart()) {
                // play nicely with the browser, and never restart annyang automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - this.getLastStartedAt()
                this.autoRestartCount += 1
                if(this.getAutoRestartCount() % 10 === 0) {
                    logger.message('Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips.')
                }
                if(timeSinceLastStart < 1000) {
                    setTimeout(() => {
                        this.start({paused: this.getPauseListening()})
                    }, 1000 - timeSinceLastStart)
                } else {
                    this.start({paused: this.getPauseListening()})
                }
            }
        }

        this.getRecognition().onresult = (event) => {
            if(this.getPauseListening()) {
                logger.message('Speech heard, but annyang is paused')
                return false
            }

            for(let i = 0; i < event.results.length; i++) {
                let result     = event.results[i],
                    transcript = result[0].transcript.trim();

                logger.message('Speech recognized: %c' + transcript)

                if(moduleRouter.matchModule(new speak(transcript)) || result.isFinal) {
                    new HTMLController().addCollectionItem(transcript)
                    return this.abort()
                }
            }

            // invokeCallbacks(callbacks.resultNoMatch, results);
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
            logger.message(e.message);
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

    getRecognition() {
        return this.recognition
    }
}