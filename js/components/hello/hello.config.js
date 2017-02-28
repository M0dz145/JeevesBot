import Behavior from "../../core/bot/behavior/behavior"

let config = {
    behavior: {}
}

config.behavior.salutation = {
    regexp: /^(Salut|Bonjour|Hello|Yo|Hey)/,
    reply: [
        'Bonjour maître !',
        'Bonjour, que puis-je faire pour toi ?',
        'Salut l\'ami.',
        'Yo bro !'
    ]
}

config.behavior.commentVas = {
    regexp: /^(Comment\s(vas-tu|allez-vous|[çc]a\sva)|Quoi\sde\s(beau|neuf)|[Ççc]a\sva)/,
    reply: [
        'Je vais très bien, merci.',
        'Bien et toi ?'
    ]
}

config.behavior.test = {
    regexp: /./,
    reply: [
        new Behavior('Bien et toi ?')
    ]
}

export default config