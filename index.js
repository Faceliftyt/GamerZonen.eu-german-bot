const Discord = require('discord.js');
require('discord-reply'); 
const bot = new Discord.Client();
const { readdirSync } = require('fs');

const fs = require("fs")
const db = require('quick.db')

const { join } = require('path');
const config = JSON.parse(fs.readFileSync('config.json' , 'utf8'))



const prefix = 'g!';
bot.commands = new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(join(__dirname, 'commands', `${file}`));
    bot.commands.set(command.name, command);

    
}




//command not found/command Handler
const CommandNotFound   = [
  new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle(':x:Fehler :x:')
  .setDescription(`Dieser Befehl konnte nicht gefunden werden!\nbenutze g!cmds um die gültigen Befehle zu sehen!`)
  
                        ]

  // MessageEvent
    bot.on('message', (message) =>{
  
  const args       = message.content.slice(prefix.length).split(/ +/);
  const command    = args.shift().toLowerCase();

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  
      let isCmd = false

  if(command === 'test'){
          bot.commands.get('test').execute(message, args)
          isCmd = false
      }
  // Wenn er nicht exestiert, schreibt er eine Nachricht mit CmdNotFound
  if(isCmd === true){
          message.channel.send(CommandNotFound).then(message.delete({timeout: 5000})).then(message => {message.delete({timeout: 5000})})
      }
  // Wenn er exestiert, loggt er es in der console
  if(isCmd === true){
          console.log(`${message.member.user.tag} (${message.member.user.id}) executed command ${prefix}${command}!`)
      }

  });  


bot.on('error', console.error);
bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        try {
            bot.commands.get(command).run(bot, message, args);
        } catch(error) {}
    }
});
console.log("--------Bot wird Hochgefahren!--------")
    console.log('Prozess startet Bot!...');
bot.on('ready', () => {
    console.log(`Einloggen mit ${bot.user.tag}!`);
    console.log('Bot is now ready for use!');
    console.log('Bot' + ' befindet sich auf ' + bot.guilds.cache.size + ' Servern!')
    console.log('Prozess zum Starten des Bots abgeschlossen! ...')
    
    

    let status = [
        'GamerZonen.eu',
        'g!cmds',
        `Derzeit aktiv auf  ${bot.guilds.cache.size} Servern`
       
    ]
    let number = 0;
    bot.user.setActivity(status[1]);
    setInterval(() => {
        let wechselnderstatus = status[number];
        bot.user.setActivity(wechselnderstatus);
        number++;
        if(number >= status.length) {
            number = 0;
        }
    }, 15000);
});




bot.on('message',function(message) {
    if(message.content.toLowerCase().startsWith("g!flip")) {
        var change = Math.floor(Math.random() * 2)

        if(change == 0) {
        message.lineReply("Deine Münze zeigt Kopf!")
        
        }
        if(change == 1) {
        message.lineReply("Deine Münze zeigt Zahl!")
    
        }
    }
});


//afk command 

bot.on('message', (message) => {
    if (message.content.includes('safk')) { 
     message.member
      .setNickname(`${message.author.username} [AFK]`)
      .catch((error) => message.lineReply("Couldn't update your nickname."));
      
    }
    if (message.content.includes('eafk')) { 
     message.member
      .setNickname('')
      .catch((error) => message.lineReply("Couldn't update your nickname."));
     
    }
   });



//clear command

bot.on('message', async (message) => {
    if (
      message.content.toLowerCase().startsWith(prefix + 'clear') ||
      message.content.toLowerCase().startsWith(prefix + 'c ')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!");
      if (!isNaN(message.content.split(' ')[1])) {
        let amount = 0;
        if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
          amount = 1;
        } else {
          amount = message.content.split(' ')[1];
          if (amount > 100) {
            amount = 100;
          }
        }
        
        await message.channel.bulkDelete(amount, true).then((_message) => {
          message.channel.send(`Bot löscht \`${_message.size}\` Nachrichten :broom:`).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2500);
          });
        });
      } else {
        message.lineReply('Du hast vergessen eine anzahl mit anzugeben').then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      }
    } else {
      if (message.content.toLowerCase() === prefix + 'help clear') {
        const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
        newEmbed
          .setDescription('Dieser Befehl löscht Meldungen zum Beispiel `g?clear 5` oder `g?c 5`.')
          .setFooter(`GamerZonen.eu | g!support`)
          .setTimestamp();         
        message.lineReply(newEmbed);
      }
    }
  });


//help vkick 
bot.on('message', async (message) => {
if (message.content.toLowerCase() === prefix + 'help vkick') {
    const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Voicekick Help**');
    newEmbed
      .setDescription('Mit diesem Befehl kannst du Leute auf dem Kanal kicken.')
      .setFooter(`GamerZonen.eu | g!support`)
      .setTimestamp();
      
    message.lineReply(newEmbed);
  } 
  
});


//server-info command 

bot.on('message', message => {
  if (message.content.toLowerCase().startsWith('g!si')) {
      
      const ServerLogo = message.guild.iconURL();
          const ServerInfoEmbed = new Discord.MessageEmbed()
              .setColor('#b700ff')
              .setTitle(`**${message.guild}** Infos `)
              .setImage(ServerLogo)
              .addField("**Datum erstellt**", `Server Erstellt am **${message.guild.createdAt.toLocaleString()}**`)
              .addField("**Besitzer**", `Der Besitzer des Server ist ${message.guild.owner}`)
              .addField("**Mitglieder Count**", "Dieser Server hat ` " + `${message.guild.memberCount}` + " ` **Mitglieder**")
              .addField("**Emoji Count**", "Dieser Server hat ` " + `${message.guild.emojis.cache.size}` + " ` **Emojis**")
              .addField("**Rollen Count**", "Dieser Server hat ` " + `${message.guild.roles.cache.size}` + " ` **Rollen**")
              .addField("**Channel Count**", "Dieser Server hat ` " + `${message.guild.channels.cache.size}` + " ` **Channels**")
              .addField("**Server Logo**", `von ${message.guild}`)
              
.setTimestamp()
              .setFooter("GamerZonen.eu | g?support")
          message.lineReply(ServerInfoEmbed)
      }
  }
)


//giveaway
const { GiveawaysManager } = require('discord-giveaways')
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaway.json",
    updateCountdownEvery: 5000, //1000ms = 1s
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#3CFFFB",
        reaction: "🎉"
    }
});
//join message
bot.on('guildCreate', (guild) => {
    let channeltoSend
    guild.channels.cache.forEach((channel) => {
       if (
           channel.type === "text" &&
        !channeltoSend &&
        channel.permissionsFor(guild.me).has("SEND_MESSAGES")

       )channeltoSend = channel;
       
    

});
   if(!channeltoSend) return;

let channelEmbed = new Discord.MessageEmbed()
.setColor("#009eff")
.setAuthor(`Danke, dass du mich zu ${guild.name} hinzugefügt hast !`)
.setDescription("Prefix von mir ist `g!`")
.addField("Wenn du  hilfe oder Probleme mit dem bot hast, verwende den Befehl","g!support")
.addField("Wenn du die Befehle sehen möchtest, verwende","g!cmds")

channeltoSend.send(channelEmbed).catch(e => {
 if (e) {
     return;
 }

})




})
 
//server join
bot.on("guildCreate", guild => {
  //in der console loggen
  console.log(`Server Join ${guild.name}, ${guild.id} beigetreten!`);
  
  //in einem channel loggen
  let channel = bot.channels.cache.find(channel => channel.id === "872767924115492914");
  if(!channel) return;
  channel.send(`Server Join  ${guild.name}. ${guild.id} beigetreten!`);
})


//blacklist
bot.on('message', message => {
    
  let user = db.get(`blacklist_ ${message.author.id}`);
  if(user == true) return message.channel.send(`Du wurdest gesperrt von Admin:${message.author}!`);
})



bot.login(config.token);






