import Hello from './components/hello/hello.controller'
import Conjugator from "./components/conjugator/conjugator.controller"
import recognizer from "./core/bot/speak/recognizer"
import commandsRouter from "./core/modules/moduleRouter"

let Recognizer = new recognizer()

Recognizer.setLanguage('fr-FR')
Recognizer.init()

commandsRouter.addModules([
    new Conjugator//,
    // new Hello
])

// Recognizer.addCommanders([
//     new Conjugator//,
//     //new Hello
// ])

// Start listening.
Recognizer.start()