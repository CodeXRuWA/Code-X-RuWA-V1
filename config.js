const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=Xr4ABTZR#rH0drKoTRAPJNJY6gHahqBBTWwnlAxnH9Y5WSkxEjHo",
MONGODB: process.env.MONGODB || "mongodb://mongo:yqzUFafwPiAfqersdkRLcGAeDdYzbvuw@junction.proxy.rlwy.net:59749",
};
