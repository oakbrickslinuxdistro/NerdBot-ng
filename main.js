const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const verfile = require('./verfile.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Version is ` + verfile.version + '!');
  console.log('just a quick reminder to please use nodemon for automatic reloads and debugging!');
  console.log('Some info about your config!');
  console.log('bot_token: ' + config.token);
  console.log('supportsite: ' + config.suppportsite);
  console.log('prefix: ' + config.prefix)
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
    msg.channel.send('Support Website: ' + config.suppportsite);
  }
});

client.login(config.token);