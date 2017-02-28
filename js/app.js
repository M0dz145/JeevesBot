import Ang from "./core/ang"
import Hello from './components/hello/hello.controller'
import Conjugator from "./components/conjugator/conjugator.controller";

Ang.init()

Ang.addCommanders([
    new Conjugator,
    new Hello
])

// Start listening.
Ang.start()