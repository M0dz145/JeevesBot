import CollectionItemController from "./collectionItem/collectionItem"

export default class HTMLController {
    constructor() {
        this.app = $('#app')
    }

    addCollectionItem(title, text) {
        this.collectionItem = new CollectionItemController
        this.collectionItem
            .setItemTitle(title)
            .setItemText(text)

        this.app.append(this.collectionItem.getHTML())
        return this.collectionItem
    }

    getCollectionItem() {
        return this.collectionItem
    }

}