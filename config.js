const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Nuwan00000/Nuwan-For-Real.1/blob/main/images/Nuwan%20bot%20image.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Nuwan WABot Is Alive Now😍*",
BOT_OWNER: '94787978426',  // Replace with the owner's phone number



};
