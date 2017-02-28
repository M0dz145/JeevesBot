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
     * Permet de rechercher un verbe depuis n'importe quel verbe conjugé
     *
     * @param verbToFind
     * @returns {*}
     */
    static find(verbToFind) {
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
                    for(let i = 0; i < conjugatedTimes[categoryName][timeName].length; i++) { // iront...
                        let verbConjugated = conjugatedTimes[categoryName][timeName][i]

                        if(verbConjugated === verbToFind) {
                            // Le verbe a été trouvé, on le renvoie directement
                            verbConjugated.setIsConjugated({
                                categoryName,
                                timeName
                            })
                            return verbConjugated
                        }
                    }
                }
            }
            return false
        }

        // Find in verbs auxiliaires
        let verbsAuxiliaires = this.getVerbsAuxiliaires()
        for(let key in verbsAuxiliaires) {
            return findVerbWithConjugations(verbsAuxiliaires[key])
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
        for(let key in verbsFilteredByRadical) {
            return findVerbWithConjugations(verbsFilteredByRadical[key])
        }

        return false
    }
}