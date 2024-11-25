const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")

        
        let data = await fetchJson(`https://www.dark-yasiya-api.site/download/fbdl1?url=${q}`)

         if (!data.result) {
            return reply("*_Can't download your facebook video._*");
        }
        
const response = await conn.sendMessage(from, { text: '*Your facebook video is downloading... 📥*' }, {quoted : mek});

        
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

       
        await delay(1000);

        
            await conn.sendMessage(from, {
            text: '*Your facebook video is uploading... 📤*',
            edit: response.key,
        });
        
        await delay(1000);

            await conn.sendMessage(from, { delete: response.key });
        
        await conn.sendMessage(from,{video: {url:data.result.hd},mimetype:"video/mp4",caption: `*HD QUALITY*\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1` },{quoted: mek})
        await conn.sendMessage(from,{video: {url:data.result.sd},mimetype:"video/mp4",caption: `*SD QUALITY*\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1` },{quoted: mek})

    } catch(e) {
      console.log(e)
      reply(`${e}`)
    }
})


cmd({
    pattern: "tt",
    alias: ["tiktok"],
    desc: "download tiktok videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if (!q && !q.startsWith("https://")) return reply("*_Please give me a tiktok url._*")

        
        let data = await fetchJson(`https://www.dark-yasiya-api.site/download/tiktok?url=${q}`)

         if (!data.result) {
            return reply("*_Can't download your tiktok video._*");
        }
        
const response = await conn.sendMessage(from, { text: '*Your tiktok video is downloading... 📥*' }, {quoted : mek});

        
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

       
        await delay(1000);

        
            await conn.sendMessage(from, {
            text: '*Your tiktok video is uploading... 📤*',
            edit: response.key,
        });
        
        await delay(1000);

            await conn.sendMessage(from, { delete: response.key });
        
        await conn.sendMessage(from,{video: {url:data.result.hdVideo},mimetype:"video/mp4",caption: `*No WaterMark*\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1` },{quoted: mek})
        await conn.sendMessage(from,{video: {url:data.result.wmVideo},mimetype:"video/mp4",caption: `*With WaterMark*\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1` },{quoted: mek})

    } catch(e) {
      console.log(e)
      reply(`${e}`)
    }
})
