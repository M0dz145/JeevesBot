import Uniqid from "../../generator/Uniqid"

export default class CollectionItemController {
    constructor() {
        this.replace = {
            title: '$TITLE$',
            text: '$TEXT$'
        }

        this.id = Uniqid()
        this.html = `
            <li id="${this.id}" class="card-panel teal">
                <span class="white-text">${this.replace.text}</span>
            </li>
        `;
    }

    getItemElement() {
        return $('#' + this.id)
    }

    setItemTitle(title) {
        this.setHTML(this.getHTML().replace(this.replace.title, title))
        return this
    }

    setItemText(text) {
        this.setHTML(this.getHTML().replace(this.replace.text, text))
        return this
    }

    setHTML(html) {
        this.html = html
        return this
    }

    getHTML(jQuerySelector = false) {
        if(jQuerySelector) {
            return $(this.html)
        }
        return this.html
    }

}