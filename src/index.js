const venom = require('venom-bot')
const wiki = require('./wiki.js')

venom.create().then(client => start(client))

function start(client) {
    client.onMessage(async message => {
        switch (message.body.split(' ')[0]) {
            case ':teste':
                client.reply(message.from, ':testado', message.id.toString())
                break
            case ':wiki':
                let texto = message.body.replace(':wiki ', '')
                let pesquisa = await wiki(texto)
                if (pesquisa == 1) {
                    client.reply(message.from, `:wiki algo válido`, message.id.toString())
                    break
                }
                client.reply(message.from, `pesquisa sobre: ${texto}:\n\n${pesquisa}`, message.id.toString())
                break
        return
        }
    })
}
