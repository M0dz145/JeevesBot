import moduleController from "../../core/modules/moduleController"
import Jeeves from "../../core/bot/jeeves"

export default class Conjugator extends moduleController {
    constructor() {
        super()

        // Methods
        this.conjugerAction()
    }

    conjugerAction() {
        this.whenMatch('verb$conjuguer :verb au :time', (speak, $verbConjuger, $verb, $time) => {
            Jeeves.reply('Quel verbe voulez-vous conjuger ?')
            debugger
            Jeeves.waitMyReply().then(...args => {
                debugger
            })
        })
    }

}