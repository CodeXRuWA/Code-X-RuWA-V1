const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "j3QDECzC#iHsy2RqaqBKDfJPW4BMGC6Y5Tv7zIY1usLMYSZUy4SE",
};
