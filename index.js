const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'honk') {
	  //listens to "honk" then sends a message
    message.reply('https://i.ytimg.com/vi/_1GLCEPezxk/maxresdefault.jpg');
  }
});

//support discord server
client.on('message', message => {
  if (message.content === 'bot:discord') {
	  //listens to "bot:discord" then sends a message
    message.reply('https://nooder.org/support');
  }
});
//login to discord
client.login('');