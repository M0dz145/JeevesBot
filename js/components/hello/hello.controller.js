import moduleController from "../../core/modules/moduleController"
import HelloConfig from "./hello.config"
import Jeeves from "../../core/bot/jeeves"

export default class Hello extends moduleController {
    constructor() {
        super()
            .setName('Hello')
            .setElementsToMatch([
                HelloConfig.behavior.commentVas.regexp,
                HelloConfig.behavior.salutation.regexp
            ])
            .setController((...args) => this.helloController.apply(this, args))
    }

    helloController() {
        let behavior = HelloConfig.behavior,
            phrase = super.getPhrase(arguments)

        debugger

        Jeeves.iSay(phrase)

        Jeeves.whenMatch(behavior.salutation.regexp, () => Jeeves.reply(behavior.salutation.reply))

        Jeeves.whenMatch(behavior.commentVas.regexp, () => {
            Jeeves.reply(behavior.commentVas.reply)
            // Jeeves.waitISay((response) => { //ex: Je vais très bien
            //     Jeeves.reply('Cool ta vie man ;)')
            // })
        })
    }

}