import Behavior from "../../core/bot/behavior/behavior"

let config = {
    behavior: {}
}

config.behavior.conjuger = {
    action: /conjuger/gi,
    reply: [
        'Quel mot voulez-vous conjuger ?'
    ]
}

new Behavior()
    .setAction('conjuger')
    .setSubject('Jeeves')
    .setReply([
        'Quel mot voulez-vous conjuger ?'
    ])

export default config