export default class preloaderController {
    constructor() {
        this.preloader = $('#preloader')
    }

    show() {
        this.preloader.fadeIn()
    }

    hide() {
        this.preloader.fadeOut()
    }

}