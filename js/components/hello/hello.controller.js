import moduleController from "../../core/modules/moduleController"
import HelloConfig from "./hello.config"
import Jeeves from "../../core/bot/jeeves"

export default class Hello extends moduleController {
    constructor() {
        super()

        // Methods
        this.helloAction()
    }

    helloAction() {
        this.whenMatch('bonjour', (speak, $verbConjuger, $verb, $time) => {
            Jeeves.reply('Quel verbe voulez-vous conjuger ?')
            debugger
            Jeeves.waitMyReply().then(...args => {
                debugger
            })
        })
    }

}