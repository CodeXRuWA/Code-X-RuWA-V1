// code-X-ruWA Bot....Created By ᴄᴏᴅᴇXʀᴜᴡᴀ
// Don't Edit This Fill

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

//______________________________________SONG-DOWNLODER_______________________________

cmd({
    pattern: "song2",
    desc: "downlode songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a YT url or Title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*──────────────────*
_*🎧 ＳＯＮＧ ＤＯＷＮＬＯＤＥＲ 🎧*_
*──────────────────*

┌────────────────
│✑ *Title:* _${data.title}_
│
│✑ *Time:* _${data.timestamp}_
│
│✑ *Ago:* _${data.ago}_
│
│✑ *Views:* _${data.views}_
└────────────────

*┌────────────────*
_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ ᴀᴜᴅɪᴏ ꜰɪʟʟ📤_
*└────────────────*

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ😈*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//________________________________Downlode-Audio_______________________________________

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//________________________________Send-Audio_____________________________________________

await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)

//_________________________________VIDEO-DOWNLODER_____________________________________

cmd({
    pattern: "video2",
    desc: "downlode videos",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a YT url or Title*")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*──────────────────*
_*🎬 VIDEO ＤＯＷＮＬＯＤＥＲ 🎬*_
*──────────────────*

┌────────────────
│✑ *Title:* _${data.title}_
│
│✑ *Time:* _${data.timestamp}_
│
│✑ *Ago:* _${data.ago}_
│
│✑ *Views:* _${data.views}_
└────────────────

*┌────────────────*
_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ Video ꜰɪʟʟ📤_
*└────────────────*

> *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ😈*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//________________________________Downlode-Video_______________________________________

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//________________________________Send-Video_____________________________________________

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4",caption:"*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ😈*"},{quoted:mek})


}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)
cmd(
  {
    pattern: 'play',
    alias: ['music'],
    react: '🎧',
    desc: 'Search and get details from YouTube.',
    category: 'download',
    filename: __filename,
  },
  async (
    client,
    message,
    chat,
    {
      from,
      body,
      quoted,
      isCmd,
      sender,
      args,
      searchQuery,
      isGroup,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!searchQuery) {
        return reply('*Please provide search terms*')
      }
      const searchResult = await yts(searchQuery),
        video = searchResult.videos[0],
        videoUrl = video.url
      let audioData = await fg.yta(videoUrl),
        downloadUrl = audioData.dl_url
      reply('*🎸 Downloading... 🎸*\n> ᴄᴏᴅᴇXʀᴜᴡᴀ')
      let response = await client.sendMessage(
        from,
        {
          document: { url: downloadUrl },
          mimetype: 'audio/mpeg',
          fileName: video.title + '.mp3',
          caption: 'Created by ᴄᴏᴅᴇXʀᴜᴡᴀ😈',
        },
        { quoted: message }
      )
      await client.sendMessage(from, {
        react: {
          text: '✅',
          key: response.key,
        },
      })
    } catch (error) {
      console.log(error)
      reply('' + error)
    }
  }
)

cmd(
  {
    pattern: 'yts',
    alias: ['ytmp3'],
    react: '🎧',
    desc: 'Download YouTube videos as audio.',
    category: 'download',
    filename: __filename,
  },
  async (
    client,
    message,
    chat,
    {
      from,
      body,
      quoted,
      isCmd,
      sender,
      args,
      searchQuery,
      isGroup,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!searchQuery) {
        return reply('*Please provide search terms*')
      }
      let audioData = await fg.yta(searchQuery),
        downloadUrl = audioData.dl_url
      reply('*🎸 Downloading... 🎸*\n> ᴄᴏᴅᴇXʀᴜᴡᴀ')
      let response = await client.sendMessage(
        from,
        {
          document: { url: downloadUrl },
          mimetype: 'audio/mpeg',
          fileName: data.title + '.mp3',
          caption: 'Created by ᴄᴏᴅᴇXʀᴜᴡᴀ😈',
        },
        { quoted: message }
      )
      await client.sendMessage(from, {
        react: {
          text: '✅',
          key: response.key,
        },
      })
    } catch (error) {
      console.log(error)
      reply('' + error)
    }
  }
)
