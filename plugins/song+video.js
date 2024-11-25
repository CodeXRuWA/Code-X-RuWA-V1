const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

//=====audio-dl=====

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*_CODE-X-RUWA V1 AUDIO DOWNLOADER_* 🎵📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
└───────────────────

> ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1😈`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio+document

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=====video-dl=====

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*_CODE-X-RUWA V1 VIDEO DOWNLOADER_* 🎬📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
└───────────────────

> ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1😈`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+document

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
