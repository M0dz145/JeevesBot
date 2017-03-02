export default class Behavior {
    constructor() {
        this.actions = null
        this.subject = null
        this.reply = null

        this.words = []
    }

    static actionToRegex(text) {
        // The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
        let optionalParam = /\s*\((.*?)\)\s*/g,
            optionalRegex = /(\(\?:[^)]+\))\?/g,
            namedParam    = /(\(\?)?:\w+/g,
            splatParam    = /\*\w+/g,
            escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#]/g

        text = text
            .replace(escapeRegExp, '\\$&')
            .replace(optionalParam, '(?:$1)?')
            .replace(namedParam, function(match, optional) {
                return optional ? match : '([^\\s]+)'
            })
            .replace(splatParam, '(.*?)')
            .replace(optionalRegex, '\\s*$1?\\s*')

        return new RegExp('^' + text + '$', 'i')
    }

    whenWordAppear(word) {
        this.getWords().push(word)
        return this
    }

    getWords() {
        return this.words
    }

    setWords(value) {
        this.words = value
        return this
    }

    getReply() {
        return this.reply
    }

    setReply(value) {
        this.reply = value
        return this
    }

    getSubject() {
        return this.subject
    }

    setSubject(value) {
        this.subject = value
        return this
    }

    getActions() {
        return this.actions
    }

    setActions(action) {
        if(Array.isArray(action)) {
            this.actions = []
            action.forEach(value => {
                this.actions.push(this.actionToRegex(value))
            })
        } else {
            this.actions = this.actionToRegex(value)
        }

        return this
    }

}