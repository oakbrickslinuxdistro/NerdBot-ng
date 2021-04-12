/*-----------------
  | NERDBOT_NG    |
  -----------------
This is a smol bot made in node, not very clean code but it does the job!
Contributors: Ineon (For the code for the original version (now archived)), OakBricks (Author), PurpurConcrete (Contributor)
Licensed under MIT i guess
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const verfile = require('./verfile.json');
const rawverfilecomparelink = (config.remoteversionfile)
const fetch = require('node-fetch');

fetch(config.motdurl)
    .then(res => res.text())
    .then(body => console.log(body));


client.on('ready', () => {
  fetch(config.remoteversionfile)
    .then(res => res.text())
    .then(body => console.log(body));
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('just a quick reminder to please use nodemon for automatic reloads and debugging!');
  console.log('Some info about your config!');
  console.log('bot_token: ' + config.token);
  console.log('supportsite: ' + config.suppportsite);
  console.log('prefix: ' + config.prefix);
  console.log('   ')
  console.log('if the current version and latest version are not the same it is likley you need to update (plese check github for the latest version!)');
  console.log('The Current Version is ' + verfile.version + '!');
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === config.prefix + 'help') {
    msg.channel.send('Read the docs at:' + config.suppportsite);
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
    msg.channel.send('Version Links: ' + config['remoteversionfile-legacy'] + '(legacy version checking), ' + config.remoteversionfile)
  }
});

client.login(config.token);