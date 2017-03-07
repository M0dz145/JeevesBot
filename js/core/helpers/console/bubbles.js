import {CONFIG, BUBBLE_CONFIG} from "../../constants/constants"
import moduleRouter from "../../modules/moduleRouter"
import speak from "../../bot/speak/speak"
import Uniqid from "../generator/Uniqid"

export default class Bubbles {
    constructor(bubbleConfig, text) {
        this.app = $(CONFIG.HTML.APP)
        this.bubbleConfig = bubbleConfig

        this.id = Uniqid()
        this.htmlTemplate = `
            <li id="${this.id}" class="row">
                <div class="card-panel ${this.bubbleConfig.color ? this.bubbleConfig.color : ''} ${this.bubbleConfig.position ? this.bubbleConfig.position : ''}">
                    <span class="white-text">${text}</span>
                </div>
            </li>
        `;

        this.app.append(this.htmlTemplate)
    }

    static init() {
        let $input = $(CONFIG.HTML.INPUT),
            $form  = $input.parent('form')
        $input.focus()
        $form.on('submit', e => {
            e.preventDefault()
            let $input = $(CONFIG.HTML.INPUT),
                value  = $input.val()
            if(value.length > 0) {
                new this(BUBBLE_CONFIG.ME, value)
                $input.val('')

                moduleRouter.matchModule(new speak(value))
            }
        })
    }

    getBubble() {
        return $('#' + this.id)
    }

    setText(text) {
        this.setHTML(this.htmlTemplate.replace(this.replace.text, text))
        return this
    }
}