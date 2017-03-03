import {REGEXP_COLLECTION} from "../constants/constants"
import verbsController from "../bot/speak/components/verbsController"

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

    static parseMatch(string) {
        let parameters = {}

        string
            .replace(REGEXP_COLLECTION.TYPED_PARAMETER, (match, type, parameter, offset, other) => {
                debugger
                switch(type) {
                    case 'verb':
                        let verbFinded = verbsController.findByName(parameter)
                        if(verbFinded) {
                            parameters.verb = verbFinded
                        }
                        break
                }
            })
            .replace(REGEXP_COLLECTION.NAMED_PARAMETER, (match, optional) => {
                return optional ? match : '([^\\s]+)'
            })

        debugger

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