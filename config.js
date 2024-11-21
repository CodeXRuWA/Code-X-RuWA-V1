const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE IMG: process.env.ALIVE_IMG || "",
ALIVE MSG: process.env.ALIVE_MSG || "Hello, I am Code-X-RuWA-V1 I am Alive Now!",
};
