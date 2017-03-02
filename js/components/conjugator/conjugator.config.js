import Behavior from "../../core/bot/behavior/behavior"

let config = {
    behaviors: [
        new Behavior()
            .p('Conjuger :mot')
            .whenWordAppear('conjuger')
            .setReply([
                'Quel mot voulez-vous conjuger ?'
            ])
    ]
}

// config.behavior.conjuger = {
//     action: /conjuger/gi,
//     reply: [
//         'Quel mot voulez-vous conjuger ?'
//     ]
// }


export default config