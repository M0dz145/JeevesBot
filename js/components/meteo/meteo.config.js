import commandController from "../../core/modules/moduleController"
import HTMLController from "../../core/helpers/html/HTMLController"

export default class Hello extends commandController {
    constructor() {
        super()
            .setCommand('Salut à tous !')
            .setRegexp(/(.+)/gi)
            .setCallback(this.helloController)
    }

    helloController(words) {
        console.log(words)
        let HTML = new HTMLController
        HTML
            .addCollectionItem()
            .setItemTitle(words)
    }
}