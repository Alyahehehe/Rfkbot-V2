let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*HALO Bang*\n*Saya aresmodz*\n*Pilih Menu Di Bawah Yaa Bree*\n*Spam = Banned*\n*Telp = Blok*\n\n*Untuk Melihat Menu Bot Ketik .menu Atau .aresmodz*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated ares By Dawnfrost\n`.trim(), '🧾MENU', '.?', '🍭Owner MikeBot', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(hel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler
