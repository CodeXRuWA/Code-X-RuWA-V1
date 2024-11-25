const axios = require('axios');
const { cmd, commands } = require('../command');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const googleTTS = require('google-tts-api');
const { getRandom } = require('../lib/functions');

const imgMsg = 'Reply to a photo for sticker!';
const description = 'It converts your replied photo to a sticker.';

cmd({
  pattern: 'st',
  react: '🧚',
  alias: ['s', 'stic'],
  desc: description,
  category: 'convert',
  use: '.st <Reply to image>',
  filename: __filename,
}, async (message, match, extra, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
  try {
    const isImageMessage = extra.quoted && 
      (extra.quoted.type === 'imageMessage' || 
      (extra.quoted.type === 'viewOnceMessage' && extra.quoted.msg.type === 'imageMessage'));
    const isStickerMessage = extra.quoted && extra.quoted.type === 'stickerMessage';
    
    if (extra.type === 'imageMessage' || isImageMessage) {
      const imageFileName = getRandom('.jpg');
      const imageBuffer = isImageMessage ? await extra.quoted.download() : await extra.download();
      await require('fs').promises.writeFile(imageFileName, imageBuffer);
      
      let sticker = new Sticker(imageFileName, {
        pack: pushname,
        author: 'ᴄᴏᴅᴇXʀᴜᴡᴀ-ᴠ1',
        type: args.includes('--crop') || args.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        categories: ['🥳', '🎉'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      });
      
      const stickerBuffer = await sticker.toBuffer();
      return message.sendMessage(from, { sticker: stickerBuffer }, { quoted: match });
    } else if (isStickerMessage) {
      const stickerFileName = getRandom('.webp');
      const stickerBuffer = await extra.quoted.download();
      await require('fs').promises.writeFile(stickerFileName, stickerBuffer);
      
      let sticker = new Sticker(stickerFileName, {
        pack: pushname,
        author: 'ᴄᴏᴅᴇXʀᴜᴡᴀ-ᴠ1',
        type: args.includes('--crop') || args.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        categories: ['🥳', '🎉'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      });
      
      const newStickerBuffer = await sticker.toBuffer();
      return message.sendMessage(from, { sticker: newStickerBuffer }, { quoted: match });
    } else {
      return await reply(imgMsg);
    }
  } catch (error) {
    reply('Error !!');
    console.error(error);
  }
});


cmd({
            pattern: "tts",
            react: "🗣️",
            desc: "text to speech.",
            category: "convert",
            filename: __filename,
            use: '.tts <Im Ishara>',
        },
        async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
        try{
          if (!q) return m.reply('Please give me Sentence to change into audio.')
            let texttts = q
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return conn.sendMessage( m.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: mek,
            });

                
} catch (e) {
reply('*Error !!*')
l(e)
}
});


cmd({
  pattern: 'trt',
  alias: ['translate'],
  desc: '🌍 Translate text between languages',
  react: '🔤',
  category: 'convert',
  filename: __filename,
}, async (message, match, extra, { from, q, reply }) => {
  try {
    const args = q.split(' ');
    if (args.length < 2) {
      return reply('❗ Please provide a language code and text. Usage: .translate [language code] [text]');
    }
    const languageCode = args[0];
    const textToTranslate = args.slice(1).join(' ');
    const apiUrl = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(textToTranslate) + '&langpair=en|' + languageCode;
    
    const response = await axios.get(apiUrl);
    const translatedText = response.data.responseData.translatedText;
    const responseMessage = `
🌍 *ᴄᴏᴅᴇXʀᴜᴡᴀ-ᴠ1 TRANSLATION*

📜 *Original*: ${textToTranslate}

🔠 *Translated*: ${translatedText}

🗣️ *Language*: ${languageCode.toUpperCase()}
    
> created by ᴄᴏᴅᴇXʀᴜᴡᴀ-ᴠ1
`;
    return reply(responseMessage);
  } catch (error) {
    console.log(error);
    return reply('⚠️ An error occurred while translating your text. Please try again later. 🤔');
  }
});
