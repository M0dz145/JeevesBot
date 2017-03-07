export default class mixins {
    static init() {
        this.math()
    }

    static math() {
        /**
         * Retourne la plus grande valeur d'un tableau
         *
         * @param array
         * @returns {*}
         */
        Array.max = function(array) {
            return Math.max.apply(Math, array);
        };

        /**
         * Retourne l'index de la plus grande valeur d'un tableau
         *
         * @param array
         * @returns {*}
         */
        Array.indexOfMax = function(array) {
            return array.indexOf(Array.max(array));
        };
    }
}