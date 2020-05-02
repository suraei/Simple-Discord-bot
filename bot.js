// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });



//COMANDOS TTS
  client.on('message', msg => {
    if (msg.content === '!julio') {
      msg.channel.send('lo habéis grabado??? lo habéis grabado??',{
        tts: true
       });
    }
  });

  client.on('message', msg => {
    if (msg.content === '!josito') {
      msg.channel.send('Y los netters y los setters??? Dónde están los netters y los setters?',{
        tts: true
       });
    }
  });

  



