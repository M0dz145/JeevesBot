import logger from "../helpers/console/logger"
import Jeeves from "../bot/jeeves"

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
        if(this.getModulesList().length === 0) {
            throw 'Aucun module à chercher'
        }

        if(Jeeves.getIsWaitReply()) {

        }

        let pointModule = []

        for(let i = 0; i < this.getModulesList().length; i++) {
            let module = this.getModulesList()[i]
            pointModule[i] = 0

            let matchElement = (element) => {
                // Match with verb
                for(let verbMatcher of element.getVerbs()) {
                    for(let verbSpeak of speak.getVerbs()) {
                        if(verbMatcher.getVerbName() === verbSpeak.getVerbName()) {
                            pointModule[i]++
                        }
                    }
                }



            }

            for(let j = 0; j < module.getElementsToMatch().length; j++) {
                let elementToMatch = module.getElementsToMatch()[j]

                if(Array.isArray(elementToMatch)) {
                    elementToMatch.forEach(element => {
                        matchElement(element)
                    })
                } else {
                    matchElement(elementToMatch)
                }

            }
        }

        let maxPoint = Array.max(pointModule)

        if(maxPoint === 0) {
            // No modules match
            return logger.message('%cNo modules matched')
        }

        let indexModule = Array.indexOfMax(pointModule),
            module      = this.getModulesList()[indexModule]

        logger
            .message('Module matched: %c' + module.getName())
            .message('With %c' + maxPoint + ' points')

        debugger

        module.getCallbacks()[indexModule].apply(module, [speak])

        return false
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