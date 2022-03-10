// Followed tutorial of https://discord.js.org/#/docs/main/stable/general/welcome

const { Client, Intents, Interaction } = require('discord.js');
const { intersection } = require('zod');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login('token');