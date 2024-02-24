const Discord = require('discord.js-selfbot-v13');
const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - 24/7 Mode activated 
  🙏🙏Thank you for using Axo Coder Source Code`);
});

client.login(process.env.TOKEN);
const http = require("http");
http.createServer((_, res) => res.end("Axo Coder is Op")).listen(8080);
