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

        this.circumstantialComplement = {
            place: [],
            way: [],
            time: []
        }

        /**
         * Qui ? Quoi ? Où ? Quand ? Comment ? Combien ? Pourquoi ? :
         * https://fr.wikipedia.org/wiki/QQOQCCP
         *
         * Compléments circonstanciels :
         * https://fr.wikipedia.org/wiki/Compl%C3%A9ment_circonstanciel
         *
         * Language tool API:
         * https://languagetool.org/http-api/swagger-ui/
         */

        this.init()
    }

    init() {
        this.setIsQuestion(SPEAK.QUESTION.test(this.getSpeak()))
        this.setIsTutoiement(SPEAK.TUTOIEMENT.test(this.getSpeak()))
        this.setIsVouvoiement(SPEAK.VOUVOIEMENT.test(this.getSpeak()))

        this.setIsAction(SPEAK.ACTION_VERB.test(this.getSpeak()))

        // Recherche les verbes
        let speakVerbRegex = this.getIsAction() ? SPEAK.ACTION_VERB : SPEAK.VERB
        this.getSpeak().replace(speakVerbRegex, (match, $verb) => {
            let verb = verbsController.find($verb)
            if(verb) {
                this.getVerbs().push(verb)
            }
        })

        // Recherche les compléments circonstanciels de lieu, manière et temps
        let circumstantialComplement
        while((circumstantialComplement = SPEAK.CIRCUMSTANTIAL_COMPLEMENT.REGEXP.exec(this.getSpeak())) !== null) {
            let $place = circumstantialComplement[SPEAK.CIRCUMSTANTIAL_COMPLEMENT.INDEX_PARAMS.PLACE],
                $way = circumstantialComplement[SPEAK.CIRCUMSTANTIAL_COMPLEMENT.INDEX_PARAMS.WAY],
                $time = circumstantialComplement[SPEAK.CIRCUMSTANTIAL_COMPLEMENT.INDEX_PARAMS.TIME]

            if($place) {
                this.getCircumstantialComplement().place.push($place)
            } else if($way) {
                this.getCircumstantialComplement().way.push($way)
            } else if($time) {
                this.getCircumstantialComplement().time.push($time)
            }
        }
    }

    transform(tutoiement) {
        if(tutoiement && !this.getIsTutoiement()) {
            return this.getSpeak().replace(SPEAK.TUTOIEMENT, (match, $vous, $verbe, offset, string) => {
            })
        } else if(!tutoiement && !this.getIsVouvoiement()) {

        }
    }

    getCircumstantialComplement() {
        return this.circumstantialComplement
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