import Hello from './components/hello/hello.controller'
import Conjugator from "./components/conjugator/conjugator.controller"
import recognizer from "./core/bot/speak/recognizer"
import moduleRouter from "./core/modules/moduleRouter"
import bubbles from "./core/helpers/console/bubbles"
import mixins from "./core/helpers/mixins/mixins"

mixins.init()
bubbles.init()

let Recognizer = new recognizer()

Recognizer.init()

moduleRouter.addModules([
    new Conjugator,
    new Hello
])

// Start listening.
Recognizer.start()