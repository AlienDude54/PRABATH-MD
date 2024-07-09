
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID: PRABATH-MD~FZhG0YJB#j_POcAnSXaKAEeiVmob7SmzX6_GR1XtV1KYzbt4lH_s process.env.SESSION_ID,    
    BOT_NUMBER: 2349130927388 process.env.BOT_NUMBER,
    GITHUB_USERNAME: username,
    GITHUB_AUTH_TOKEN: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 process.env.GITHUB_AUTH_TOKEN,
};
