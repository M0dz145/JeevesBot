import {REGEXP_COLLECTION, REGEXP_SYMBOLES} from "../../constants/constants"

export default class RegexpGenerator {
    constructor(existReg = '') {
        if(existReg instanceof RegExp) {
            this.stringRegexp = existReg.source
            this.flags = existReg.flags
        } else {
            this.stringRegexp = existReg
            this.flags = 'gi'
        }
        this.regexp = null
    }

    static textToRegex(text) {
        // The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
        // let optionalParam = /\s*\((.*?)\)\s*/g,
        //     optionalRegex = /(\(\?:[^)]+\))\?/g,
        //     splatParam    = /\*\w+/g,
        //     escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#]/g

        text = text
            // .replace(escapeRegExp, '\\$&')
            // .replace(optionalParam, '(?:$1)?')
            .replace(REGEXP_COLLECTION.NAMED_PARAMETER, (match, optional) => {
                return optional ? match : '([^\\s]+)'
            })
            // .replace(splatParam, '(.*?)')
            // .replace(optionalRegex, '\\s*$1?\\s*')

        return new RegExp(text, 'gi')
    }

    setFlags() {
        this.flags = ''
        arguments.forEach(flag => {
            this.flags += flag
        })
        return this
    }

    getRegexp() {
        if(this.regexp === null) {
            this.regexp = new RegExp(this.getStringRegexp())
        }
        return this.regexp
    }

    setStringRegexp(value) {
        this.stringRegexp = value
        return this
    }

    getStringRegexp() {
        return this.stringRegexp
    }

    addOr(value) {
        let addOr = (v) => {
            if(this.getStringRegexp().substr(this.getStringRegexp().length - 1) !== REGEXP_SYMBOLES.ALTERNATION) {
                this.setStringRegexp(this.getStringRegexp() + REGEXP_SYMBOLES.ALTERNATION + v)
            }
        }
        if(Array.isArray(value)) {
            value.forEach((v, pos) => {
                if(pos !== 0 && pos < value.length) {
                    addOr(v)
                }
            })
        } else {
            if(this.getStringRegexp().substr(this.getStringRegexp().length - 1) !== REGEXP_SYMBOLES.ALTERNATION) {
                addOr(value)
            }
        }
        return this
    }
}