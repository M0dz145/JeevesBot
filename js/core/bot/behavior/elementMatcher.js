import {REGEXP_COLLECTION, ELEMENT_MATCHER} from "../../constants/constants"
import verbsController from "../speak/components/verbsController"
import logger from "../../helpers/console/logger"

export default class elementMatcher {
    constructor(matchText) {
        this.matchText = matchText

        this.parameters = {
            verb: [],
            circumstantialComplement: {
                place: [],
                time: [],
                way: []
            },
            namedParam: {}
        }

        this.init()
    }

    init() {
        logger.message('Search params from match: %c' + this.getMatchText())
        this.getMatchText()
        // Types $
            .replace(REGEXP_COLLECTION.TYPED_PARAMETER, (match, type, parameter, offset, completeString) => {
                switch(type) {
                    case ELEMENT_MATCHER.VERB:
                        let verbFinded = verbsController.findByName(parameter)
                        if(!verbFinded) {
                            throw 'Module error, aucun verbe trouvé lors du parse de l\'elementMatcher'
                        }
                        this.getVerbs().push(verbFinded)
                        logger.message('Finded from match: %cVERB ' + verbFinded.getVerbName())
                        break
                }
                debugger

                return match
            })
            .replace(REGEXP_COLLECTION.NAMED_PARAMETER, (match, optional, parameter, offset, completeString) => {
                if(optional) {

                }

                this.getParameters().namedParam[parameter] = ''
                debugger

                return match
            })
    }

    static paramMatcher(name, typed = false) {
        if(typed !== false) {
            return typed + ELEMENT_MATCHER.PARAMETERS.TYPED + name
        }
        return ELEMENT_MATCHER.PARAMETERS.NAMED + name
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