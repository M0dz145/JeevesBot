export default class moduleController {
    constructor() {
        this.name = null
        this.elementsToMatch = []
        this.callbacks = []

        this.initModule()
    }

    initModule() {
        this.setName(this.constructor.name)

        return this
    }

    whenMatch(match, callback) {
        this.getElementsToMatch().push(match)
        this.getCallbacks().push(callback)

        return this
    }

    setName(commandName) {
        this.name = commandName
        return this
    }

    getName() {
        return this.name
    }

    getCallbacks() {
        return this.callbacks
    }

    getElementsToMatch() {
        return this.elementsToMatch
    }
}