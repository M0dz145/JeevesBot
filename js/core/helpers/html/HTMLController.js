import CollectionItemController from "./collectionItem/collectionItem"

export default class HTMLController {
    constructor() {
        this.app = $('#app')
    }

    addCollectionItem(text, color) {
        this.collectionItem = new CollectionItemController
        this.collectionItem
            .setItemText(text)
            .setItemColor(color ? color : 'teal')

        this.app.append(this.collectionItem.getHTML())
        return this.collectionItem
    }

    getCollectionItem() {
        return this.collectionItem
    }

}