import VERBS_LIST from "./verbs/verbsList"

export default class verbsController {

    /**
     * Récupère les verbes auxiliaires
     *
     * @returns {Array.<T>|*|{TAG, CLASS, ATTR, CHILD, PSEUDO}}
     */
    static getVerbsAuxiliaires() {
        return VERBS_LIST.filter(verb => {
            return verb.getIsAuxiliaire()
        })
    }

    /**
     * Permet de rechercher un verbe depuis son nom (ex : conjuger)
     *
     * @param verbName
     * @returns {*|T|{}}
     */
    static findByName(verbName) {
        return VERBS_LIST.find(verb => {
            return verb.getVerbName() === verbName
        })
    }

    /**
     * Permet de rechercher un verbe depuis n'importe quel verbe conjugé
     *
     * @param verbToFind
     * @returns {*}
     */
    static find(verbToFind) {
        verbToFind = verbToFind.toLowerCase()
        /**
         * Recherche un verbe en essayant de conjuger ce dernier avec les terminaisons des verbes filtrés
         *
         * @param verb
         * @returns {*}
         */
        let findVerbWithConjugations = (verb) => {
            let conjugatedTimes = verb.getConjugatedVerb()

            for(let categoryName in conjugatedTimes) { // indicatif...
                for(let timeName in conjugatedTimes[categoryName]) { // present, future...

                    // conjugatedTimes[categoryName][timeName].find(verbConjugated => {
                    //     if(verbConjugated === verbToFind) {
                    //         // Le verbe a été trouvé, on le renvoie directement
                    //         verbConjugated.setIsConjugated({
                    //             categoryName,
                    //             timeName
                    //         })
                    //         return verbConjugated
                    //     }
                    // })
                    for(let i = 0; i < conjugatedTimes[categoryName][timeName].length; i++) { // iront...
                        let verbConjugated = conjugatedTimes[categoryName][timeName][i]

                        if(verbConjugated === verbToFind) {
                            // Le verbe a été trouvé
                            let verbFinded = verb.setIsConjugated({
                                categoryName,
                                timeName
                            })
                            return verbFinded
                        }
                    }
                }
            }
            return false
        }

        // Find in verbs auxiliaires
        let verbsAuxiliaires = this.getVerbsAuxiliaires()
        for(let verbAuxiliaire of verbsAuxiliaires) {
            let verbIsFinded = findVerbWithConjugations(verbAuxiliaire)
            if(verbIsFinded) {
                return verbIsFinded
            }
        }

        // Find in list of verbs
        let verbsFilteredByRadical = VERBS_LIST.filter(verb => {
            // On a déjà vérifié dans les verbs auxiliaires
            if(verb.getIsAuxiliaire()) {
                return false
            }
            // On vérifie par rapport au radical
            let radicalLength = verb.getRadical().length
            return verb.getVerbName().substring(0, radicalLength) === verbToFind.substring(0, radicalLength)
        })

        // On va rechercher le verbe en essayant de conjuger ce dernier avec les terminaisons des verbes filtrés
        for(let verbFilteredByRadical of verbsFilteredByRadical) {
            let verbIsFinded = findVerbWithConjugations(verbFilteredByRadical)
            if(verbIsFinded) {
                return verbIsFinded
            }
        }

        return false
    }
}