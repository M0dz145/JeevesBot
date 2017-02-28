import HTMLController from "../helpers/html/HTMLController"
import Humanize from "../helpers/humanize/humanize"
import commandController from "../commands/commandController"
import Ang from "../ang"
import Behavior from "./behavior/behavior"
import speakController from "./speak/speak"

class Jeeves {
    constructor() {
        console.log('New Jeeves created')
        this.HTMLController = new HTMLController
        this.say = null
        this.waitListen = false
        this.waitReplyCallback = null

        this.spirit = {
            friendly: false
        }
    }

    getSpirit() {
        return this.spirit
    }

    getISay() {
        return this.say
    }

    iSay(text) {
        let speakCtrl = new speakController(text)
        this.say = Humanize.replyFormat(text)

        return this
    }

    waitMyReply() {
        return new Promise((resolve, reject) => {
            this.waitListen = true
            let commandCtrl = new commandController

            commandCtrl.setWaitReply((...args) => {
                Ang.removeCommands(commandCtrl.getName())
                this.waitListen = false
                resolve(args)
            })

            Ang.addCommanders(commandCtrl)
        })
    }

    whenMatch(match, callback) {
        let regexp = new RegExp(match)

        if(regexp.test(this.getISay())) {
            callback.apply(this)
        }
        return this
    }

    reply(reply) {
        this.HTMLController.addCollectionItem(this.getISay(), this.chooseReply(reply))
        return this
    }

    chooseReply(replys) {
        let replySelected = replys[Math.floor(Math.random() * replys.length)]
        if(this.getSpirit().friendly) {
            // replySelected = Humanize.tutoie(replySelected)
        } else {
            // replySelected = Humanize.vouvoie(replySelected)
        }
        return replySelected

        // replys.filter((element, index, array) => {
        //     if(element instanceof Behavior) {
        //         if(this.getSpirit().friendly) {
        //
        //         }
        //         // if(element.getFriendly() !== null) {
        //         //     if((this.getSpirit().friendly === true && element.getFriendly() === true) || (this.getSpirit().friendly === false && element.getFriendly() === false)) {
        //         //         return true
        //         //     }
        //         // }
        //     }
        // })
    }
}

export default new Jeeves