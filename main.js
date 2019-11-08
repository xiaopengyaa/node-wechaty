const { Wechaty } = require('wechaty')
const qrcodeTerminal = require('qrcode-terminal')
const bot = new Wechaty()
bot.on('scan', (qrcode, status) => {
  console.log('status', status)
  qrcodeTerminal.generate(qrcode, {
    small: true
  })
})
bot.on('login', user => console.log(`User ${user} logined`))
bot.on('message', message => console.log(`Message: ${message}`))
bot.start()