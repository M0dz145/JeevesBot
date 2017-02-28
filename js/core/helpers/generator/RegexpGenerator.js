const SYMBOLES = {
    ALTERNATION: '|'
}

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
            if(this.getStringRegexp().substr(this.getStringRegexp().length - 1) !== SYMBOLES.ALTERNATION) {
                this.setStringRegexp(this.getStringRegexp() + SYMBOLES.ALTERNATION + v)
            }
        }
        if(Array.isArray(value)) {
            value.forEach((v, pos) => {
                if(pos !== 0 && pos < value.length) {
                    addOr(v)
                }
            })
        } else {
            if(this.getStringRegexp().substr(this.getStringRegexp().length - 1) !== SYMBOLES.ALTERNATION) {
                addOr(value)
            }
        }
        return this
    }
}