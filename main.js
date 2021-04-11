const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const verfile = require('./verfile.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'help') {
    msg.channel.send('Read the docs at:');
  }
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'why') {
    msg.channel.send('joe nuts');
  }
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'info') {
    msg.channel.send('Version: ' + verfile.version);
    msg.channel.send('Prefix: ' + config.prefix);
    msg.channel.send('Prefix Example. ' + config.prefix + 'help');
  }
});

client.login(config.token);