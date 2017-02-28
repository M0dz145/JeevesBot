import Humanize from "../../helpers/humanize/humanize"
import {SPEAK} from "../../constants/constants"
import verbsController from "./components/verbsController"

export default class speakController {
    constructor(speak) {
        this.speak = speak

        this.isQuestion = null
        this.isTutoiement = null
        this.isVouvoiement = null

        this.isAction = null

        this.init()
    }

    init() {
        this.setIsQuestion(SPEAK.QUESTION.test(this.getSpeak()))
        this.setIsTutoiement(SPEAK.TUTOIEMENT.test(this.getSpeak()))
        this.setIsVouvoiement(SPEAK.VOUVOIEMENT.test(this.getSpeak()))

        this.setIsAction(SPEAK.ACTION_VERB.test(this.getSpeak()))

        if(this.getIsAction()) {
            this.getSpeak().replace(SPEAK.ACTION_VERB, (match, $verb) => {
                let verb = verbsController.find($verb)
                debugger
            })
        } else {
            this.getIsAction().replace(SPEAK.VERB, (match, $verb) => {
                let verb = verbsController.find($verb)
                debugger
            })
        }
    }

    transform(tutoiement) {
        if(tutoiement && !this.getIsTutoiement()) {
            return this.getSpeak().replace(SPEAK.TUTOIEMENT, (match, $vous, $verbe, offset, string) => {
            })
        } else if(!tutoiement && !this.getIsVouvoiement()) {

        }
    }

    getIsAction() {
        return this.isAction
    }

    setIsAction(value) {
        this.isAction = value
        return this
    }

    getSpeak() {
        return this.speak
    }

    setIsQuestion(value) {
        this.isQuestion = value
        return this
    }

    getIsTutoiement() {
        return this.isTutoiement
    }

    setIsTutoiement(value) {
        this.isTutoiement = value
        return this
    }

    getIsVouvoiement() {
        return this.isVouvoiement
    }

    setIsVouvoiement(value) {
        this.isVouvoiement = value
        return this
    }


}