import commandController from "../../core/commands/commandController"
import ConjugatorConfig from "./conjugator.config"
import Jeeves from "../../core/bot/jeeves"

export default class Conjugator extends commandController {
    constructor() {
        super()
            .setCommand('Conjugator')
            .setRegexp([
                ConjugatorConfig.behavior.conjuger.action
            ])
            .setCallback((...args) => this.conjugatorController.apply(this, args))
    }

    conjugatorController() {
        let behavior = ConjugatorConfig.behavior,
            phrase = super.getPhrase(arguments)

        Jeeves.iSay(phrase)

        Jeeves.whenMatch(behavior.conjuger.action, () => {
            Jeeves.reply(behavior.salutation.reply)
            Jeeves.waitMyReply().then(...args => {
                debugger
            })
        })
    }

}