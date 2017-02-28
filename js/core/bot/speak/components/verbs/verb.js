import CONJUGATIONS_LIST from "./conjugationsList"

export default class verb {
    constructor(name, template) {
        this.verbName = name // abaisser
        this.verbTemplate = template // aim:er
        this.conjugation = null // {...}

        this.terminaison = null // er
        this.radical = null // abaiss
        this.isAuxiliaire = false // Savoir si le verbe est un auxiliaire

        this.conjugatedVerb = null // Le verbe conjugé au présent, imparfait & futur
        this.isConjugated = false // Savoir si le verbe est actuellement conjugé ou non

        this.init()
    }

    init() {
        let templateSplited = this.getVerbTemplate().split(':')

        if(templateSplited[0].length === 0) {
            this.setIsAuxiliaire(true)
        }

        let terminaison = templateSplited[1]
        this.setTerminaison(terminaison)

        let radical = this.getVerbName().substring(0, this.getVerbName().length - terminaison.length)
        this.setRadical(radical)

        // On récupère l'objet de conjugaison correspondant au verbe
        let j = 0
        while(j < CONJUGATIONS_LIST.length && this.getConjugation() === null) {
            let conjugation = CONJUGATIONS_LIST[j]
            if(this.getVerbTemplate() === conjugation.getName()) {
                return this.setConjugation(conjugation)
            }
            j++
        }
    }

    getIsConjugated() {
        return this.isConjugated
    }

    setIsConjugated(value) {
        this.isConjugated = value
        return this
    }

    getConjugatedVerb() {
        if(this.conjugatedVerb === null) {
            // On récupère les terminaisons des temps présent, imparfait & futur
            let times = this.getConjugation().getTerminaisonsByTimes({
                indicative: ['present', 'imperfect', 'future']
            })

            let conjugatedObject = {}
            for(let timeCategory in times) { // indicatif...
                if(conjugatedObject[timeCategory] === undefined) {
                    conjugatedObject[timeCategory] = {}
                }

                for(let timeName in times[timeCategory]) { // present, imperfect...
                    if(conjugatedObject[timeCategory][timeName] === undefined) {
                        conjugatedObject[timeCategory][timeName] = []
                    }
                    let terminaisons = times[timeCategory][timeName]
                    terminaisons.forEach(terminaison => {
                        conjugatedObject[timeCategory][timeName].push(this.getRadical() + terminaison)
                    })
                }
            }

            this.setConjugatedVerb(conjugatedObject)
        }

        return this.conjugatedVerb
    }

    setConjugatedVerb(value) {
        this.conjugatedVerb = value
        return this
    }

    getIsAuxiliaire() {
        return this.isAuxiliaire
    }

    setIsAuxiliaire(value) {
        this.isAuxiliaire = value
        return this
    }

    getRadical() {
        return this.radical
    }

    setRadical(value) {
        this.radical = value
        return this
    }

    getTerminaison() {
        return this.terminaison
    }

    setTerminaison(value) {
        this.terminaison = value
        return this
    }

    getVerbName() {
        return this.verbName
    }

    getVerbTemplate() {
        return this.verbTemplate
    }

    setVerbTemplate(value) {
        this.verbTemplate = value
        return this
    }

    getConjugation() {
        return this.conjugation
    }

    setConjugation(value) {
        this.conjugation = value
        return this
    }
}