import Humanize from "../helpers/humanize/humanize"
import bubbles from "../helpers/console/bubbles"
import {BUBBLE_CONFIG} from "../constants/constants"

class Jeeves {
    constructor() {
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
        new bubbles(BUBBLE_CONFIG.JEEVES, reply)
        return this
    }
}

export default new Jeeves