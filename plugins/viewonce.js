const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "vv",
    desc: "For Sve Viewonce msg.",
    category: "convert",
    react: "👧🏻",
    filename: __filename
},
async(conn, mek, m, message,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   if (!message.reply_message.viewones) return await reply("_*Reply to a view once*_");
   return await conn.sendMessage(message.chat, message.reply_message.message, { readViewOnce: true });
});
