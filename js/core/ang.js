import {CONFIG} from './constants/constants'

export default class Ang {
    static getAng() {
        return annyang
    }

    static removeCommands(command) {
        this.getAng().removeCommands(command)
        return this.getAng()
    }

    static addCommanders(command) {
        let commands = {}
        if(Array.isArray(command)) {
            command.forEach((cmd) => {
                commands[cmd.getName()] = cmd.getCommand()
            })
        } else {
            commands[command.getName()] = command.getCommand()
        }
        this.getAng().addCommands(commands)
        return this.getAng()
    }

    static start() {
        this.getAng().start({autoRestart: true})
        return this.getAng()
    }

    static init() {
        this.getAng().setLanguage(CONFIG.LANG);
        return this.getAng()
    }

}