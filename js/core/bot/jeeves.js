import HTMLController from "../helpers/html/HTMLController"
import Humanize from "../helpers/humanize/humanize"

class Jeeves {
    constructor() {
        this.HTMLController = new HTMLController()
        this.behaviors = []

        this.isWaitReply = false
    }

    iSay(text) {
        // let speakCtrl = new speakController(text)
        this.say = Humanize.replyFormat(text)

        return this
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
        this.HTMLController.addCollectionItem(this.getISay(), this.chooseReply(reply))
        return this
    }

    chooseReply(replys) {
        let replySelected = replys[Math.floor(Math.random() * replys.length)]
        return replySelected
    }
}

export default new Jeeves