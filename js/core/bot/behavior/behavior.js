export default class Behavior {
    constructor() {
        this.action = null
        this.subject = null
        this.reply = null
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

    getAction() {
        return this.action
    }

    setAction(value) {
        this.action = value
        return this
    }

}