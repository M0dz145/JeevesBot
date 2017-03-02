import logger from "../helpers/console/logger"
import Jeeves from "../bot/jeeves"
import {REGEXP_COLLECTION} from "../constants/constants"
import RegexpGenerator from "../helpers/generator/RegexpGenerator"

class moduleRouter {
    constructor() {
        this.modulesList = []
    }

    /**
     * Recherche une correspondance entre ce qui est dit et un module
     *
     * @param speak
     * @returns {boolean}
     */
    matchModule(speak) {
        if(Jeeves.getIsWaitReply()) {

        }

        let i            = 0,
            moduleFinded = null

        while(moduleFinded === null && i < this.getModulesList().length) {
            let module = this.getModulesList()[i]

            for(let verb of speak.getVerbs()) {
                for(let j = 0; j < module.getElementsToMatch().length; j++) {
                    if(module.getElementsToMatch()[j].includes(verb.getVerbName())) {
                        // let params,
                        //     parameters = []
                        // while((params = REGEXP_COLLECTION.PARAMETERS.exec(module.getElementsToMatch()[j])) !== null) {
                        //     parameters.push(params[1])
                        // }

                        let parameters = RegexpGenerator.textToRegex(module.getElementsToMatch()[j])

                        debugger
                        logger
                            .message('Module matched: %c' + module.getName())
                            .message('With matcher module: %c' + module.getElementsToMatch()[j])

                        module.getCallbacks()[j].apply(module, [speak])
                        return moduleFinded = true
                    }
                }
            }

            i++
        }

        return false

        // // try and match recognized text to one of the commands on the list
        // for(var j = 0, l = this.getModulesList().length; j < l; j++) {
        //     var currentCommand = this.getModulesList()[j]
        //     var result = currentCommand.module.exec(commandText)
        //     if(result) {
        //         var parameters = result.slice(1)
        //         logger.message('module matched: %c' + currentCommand.originalPhrase)
        //         if(parameters.length) {
        //             logger.message('with parameters', parameters)
        //         }
        //         // execute the matched module
        //         // currentCommand.callback.apply(this, parameters)
        //         // invokeCallbacks(callbacks.resultMatch, commandText, currentCommand.originalPhrase, results)
        //         return true
        //     }
        // }
    }

    getModuleByName(moduleName) {
        let findModule = this.getModulesList().find(module => {
            return module.getName() === moduleName
        })

        return findModule ? findModule : false
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
    addModules(modules) {
        let pushCommand = (module) => {
            // register the module
            this.getModulesList().push(module);
            logger.message('Module successfully loaded: %c' + module.getName());
        }

        if(Array.isArray(modules)) {
            modules.forEach(module => {
                pushCommand(module)
            })
        } else {
            pushCommand(modules)
        }
    }

    /**
     * Remove existing modules. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
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
    removeModules(commandsToRemove) {
        if(commandsToRemove === undefined) {
            this.modulesList = [];
        } else {
            commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
            this.modulesList = this.getModulesList().filter(function(command) {
                for(var i = 0; i < commandsToRemove.length; i++) {
                    if(commandsToRemove[i] === command.originalPhrase) {
                        return false;
                    }
                }
                return true;
            });
        }
    }

    getDebugStyle() {
        return this.debugStyle
    }

    setDebugStyle(value) {
        this.debugStyle = value
        return this
    }

    getDebugState() {
        return this.debugState
    }

    setDebugState(value) {
        this.debugState = value
        return this
    }

    getModulesList() {
        return this.modulesList
    }

}

export default new moduleRouter()