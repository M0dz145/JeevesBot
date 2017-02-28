export default class commandController {
    constructor() {
        this.command = {}
    }

    static getPhrase() {
        // Récupère le premier argument valide
        let phrase = null,
            i      = 0

        while(i < arguments.length && phrase === null) {
            if(arguments[i] !== undefined) {
                return phrase = arguments[i]
            }
            i++
        }
    }

    setCommand(commandName) {
        this.name = commandName
        this.command[this.getName()] = {}
        return this
    }

    getName() {
        return this.name
    }

    getCommand() {
        return this.command[this.name]
    }

    setRegexp(regexp) {
        if(Array.isArray(regexp)) {
            let regexpList = ''

            for(let i = 0; i < regexp.length; i++) {
                let reg = regexp[i].toString()

                if(reg.substring(0, 1) === '/') {
                    reg = reg.substring(1)
                }
                if(reg.substring(reg.length, reg.length - 1) === '/') {
                    reg = reg.substring(0, reg.length - 1)
                }

                if(i > 0 && i !== regexp.length) {
                    regexpList += '|'
                }
                regexpList += reg // `(${reg})`
            }

            this.getCommand().regexp = new RegExp(regexpList)
            console.log(this.getCommand().regexp)
        } else if(regexp instanceof RegExp) {
            this.getCommand().regexp = regexp
        }

        return this
    }

    setCallback(callback) {
        this.getCommand().callback = callback
        return this
    }

    setWaitReply(callback) {
        this.setCommand('waitAnyReply')
        this.setRegexp(/(.+)/)
        this.setCallback(callback)
    }
}