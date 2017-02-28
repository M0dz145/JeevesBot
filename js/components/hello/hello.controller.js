import commandController from "../../core/commands/commandController"
import HelloConfig from "./hello.config"
import Jeeves from "../../core/bot/jeeves"

export default class Hello extends commandController {
    constructor() {
        super()
            .setCommand('Hello')
            .setRegexp([
                HelloConfig.behavior.commentVas.regexp,
                HelloConfig.behavior.salutation.regexp
            ])
            .setCallback((...args) => this.helloController.apply(this, args))
    }

    helloController() {
        let behavior = HelloConfig.behavior,
            phrase = super.getPhrase(arguments)

        Jeeves.iSay(phrase)

        Jeeves.whenMatch(behavior.salutation.regexp, () => Jeeves.reply(behavior.salutation.reply))

        Jeeves.whenMatch(behavior.commentVas.regexp, () => {
            Jeeves.reply(behavior.commentVas.reply)
            Jeeves.waitISay((response) => { //ex: Je vais très bien
                Jeeves.reply('Cool ta vie man ;)')
            })
        })
    }

}