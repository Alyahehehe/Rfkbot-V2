let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :     *Rp 15000*
╠➥ *1 Bulan* :      *Rp 20000*
╠➥ *2 Bulan* :      *Rp 30000*
╠➥ *Permanen* : *Rp 40000*
╠➥ *Owner* :   *Rp 30000*/bln
╠➥ *Nomer Dana & pulsa* : 
║    0895324080018
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2022 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 aresmodz 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
