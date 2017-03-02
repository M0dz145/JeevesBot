import {SPEAK} from "../../constants/constants"
import verbsController from "./components/verbsController"

export default class speak {
    constructor(speak) {
        this.speak = speak

        this.isQuestion = null
        this.isTutoiement = null
        this.isVouvoiement = null

        this.isAction = null
        this.verbs = []

        /** https://fr.wikipedia.org/wiki/QQOQCCP */

        this.init()
    }

    init() {
        this.setIsQuestion(SPEAK.QUESTION.test(this.getSpeak()))
        this.setIsTutoiement(SPEAK.TUTOIEMENT.test(this.getSpeak()))
        this.setIsVouvoiement(SPEAK.VOUVOIEMENT.test(this.getSpeak()))

        this.setIsAction(SPEAK.ACTION_VERB.test(this.getSpeak()))

        let speakVerbRegex = this.getIsAction() ? SPEAK.ACTION_VERB : SPEAK.VERB
        this.getSpeak().replace(speakVerbRegex, (match, $verb) => {
            let verb = verbsController.find($verb)
            debugger
            this.getVerbs().push(verb)
        })
    }

    transform(tutoiement) {
        if(tutoiement && !this.getIsTutoiement()) {
            return this.getSpeak().replace(SPEAK.TUTOIEMENT, (match, $vous, $verbe, offset, string) => {
            })
        } else if(!tutoiement && !this.getIsVouvoiement()) {

        }
    }

    getVerbs() {
        return this.verbs
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