// Require the necessary discord.js classes
const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!` )
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
})

// Login to Discord with your client's token
client.login(process.env.TOKEN);