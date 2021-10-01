const Discord = require('discord.js');
const { userInfo } = require('os');

module.exports = {
    name: "bugok",
    description: "ban command",

    async run (bot, message, args) {
        
        if (message.author.id !== '640256514267021314')
        if (message.author.id !== '759528653708853308')
        if (message.author.id !== '752192188070494269'){
            return message.reply(`Dieser Befehl steht nur einem Bot-Administrator zur Verfügung!`).then(msg => msg.delete({timeout:"50000"}));
        }
     
        if (!args[0]) return message.reply("Du hast vergessen einen Benutzer zu erwähnen").then(msg => msg.delete({timeout:"5000"}));

   


    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 

    
    
      let bugokayembed = new Discord.MessageEmbed()
      .setColor("#24ad2b")
      .setTitle("Fehler verarbeitet")
      .setDescription(`Dein gemeldeter Fehler wurde von  ${message.author} behoben`)
      .setFooter(`GamerZonen.eu BugSystem`)
      .setTimestamp()
   user.send(bugokayembed).then(msg => msg.delete({timeout:"50000"}));

     
message.lineReply("Die Bestätigung wurde an den Benutzer gesendet").then(msg => msg.delete({timeout:"50000"}));
      

        

       
       

        
    }

};