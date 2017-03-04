import HTMLController from "../helpers/html/HTMLController"
import Humanize from "../helpers/humanize/humanize"

class Jeeves {
    constructor() {
        this.HTMLController = new HTMLController()
        this.behaviors = []

        this.isWaitReply = false
    }
    
    getIsWaitReply() {
        return this.isWaitReply
    }
    
    setIsWaitReply(value) {
        this.isWaitReply = value
        return this
    }

    waitMyReply() {
        return new Promise((resolve, reject) => {
            this.setIsWaitReply(true)
        })
    }

    reply(reply) {
        this.HTMLController.addCollectionItem(reply, 'light-blue')
        return this
    }
}

export default new Jeeves