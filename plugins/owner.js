const { cmd } = require('../command');
const { exec } = require('child_process');
const fs = require("fs");

// 4. Block User
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    if (!quoted) return reply("*❌ Please reply to the user you want to block.*");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(`*🚫 User ${user} blocked successfully.*`);
    } catch (error) {
        reply(`*❌ Error blocking user: ${error.message}*`);
    }
});

// 5. Unblock User
cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    if (!quoted) return reply("*❌ Please reply to the user you want to unblock.*");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(`*✅ User ${user} unblocked successfully.*`);
    } catch (error) {
        reply(`❌ Error unblocking user: ${error.message}`);
    }
});

// 7. Get Bot JID
cmd({
    pattern: "jid",
    desc: "Get the Jid of contact or groups the bot is part of.",
    category: "owner",
    react: "📝",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
   
await conn.sendMessage(from, { text : from }, {quoted : mek })
});

// 8. Group JIDs List
cmd({
    pattern: "gjid",
    desc: "Get the list of JIDs for all groups the bot is part of.",
    category: "owner",
    react: "📝",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");

    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups).join('\n');
    reply(`📝 *Group JIDs:*\n\n${groupJids}`);
});
