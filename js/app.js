import Hello from './components/hello/hello.controller'
import Conjugator from "./components/conjugator/conjugator.controller"
import recognizer from "./core/bot/speak/recognizer"
import moduleRouter from "./core/modules/moduleRouter"
import HTMLController from "./core/helpers/html/HTMLController"
import speak from "./core/bot/speak/speak"

$('#input').focus()
$('#form').on('submit', e => {
    e.preventDefault()
    let value = $('#input').val()
    if(value.length > 0) {
        new HTMLController().addCollectionItem(value)
        $('#input').val('')

        moduleRouter.matchModule(new speak(value))
    }
})

let Recognizer = new recognizer()

Recognizer.init()

moduleRouter.addModules([
    new Conjugator//,
    // new Hello
])

// Recognizer.addCommanders([
//     new Conjugator//,
//     //new Hello
// ])

// Start listening.
Recognizer.start()