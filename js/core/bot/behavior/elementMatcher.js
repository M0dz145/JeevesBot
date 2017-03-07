import {REGEXP_COLLECTION} from "../../constants/constants"
import verbsController from "../speak/components/verbsController"
import logger from "../../helpers/console/logger"

export default class elementMatcher {
    constructor(matchText) {
        this.matchText = matchText

        this.parameters = {
            verb: []
        }

        this.init()
    }

    init() {
        logger.message('Search params from match: %c' + this.getMatchText())
        this.getMatchText()
            .replace(REGEXP_COLLECTION.TYPED_PARAMETER, (match, type, parameter, offset, completeString) => {
                debugger
                switch(type) {
                    case 'verb':
                        let verbFinded = verbsController.findByName(parameter)
                        if(!verbFinded) {
                            throw 'Module error, aucun verbe trouvé lors du parse de l\'elementMatcher'
                        }
                        this.getVerbs().push(verbFinded)
                        logger.message('Finded from match: %cVERB ' + verbFinded.getVerbName())
                        break
                }
            })
    }

    getVerbs() {
        return this.getParameters().verb
    }

    getParameters() {
        return this.parameters
    }

    setParameters(value) {
        this.parameters = value
        return this
    }

    getMatchText() {
        return this.matchText
    }

    setMatchText(value) {
        this.matchText = value
        return this
    }


}