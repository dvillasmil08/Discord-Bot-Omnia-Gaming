// Followed tutorial of https://discordjs.guide/creating-your-bot/#creating-configuration-files

const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client ({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);