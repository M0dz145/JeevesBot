class logger {
    constructor() {
        this.debugState = true
        this.debugStyle = 'font-weight: bold; color: #f00;'
    }

    // method for logging in developer console when debug mode is on
    message(text, extraParameters) {
        if(this.getDebugState()) {
            if (text.indexOf('%c') === -1 && !extraParameters) {
                console.log(text)
            } else {
                console.log(text, extraParameters || this.getDebugStyle())
            }
        }
        return this
    }

    getDebugState() {
        return this.debugState
    }

    setDebugState(value) {
        this.debugState = value
        return this
    }

    getDebugStyle() {
        return this.debugStyle
    }

    setDebugStyle(value) {
        this.debugStyle = value
        return this
    }

}

export default new logger()