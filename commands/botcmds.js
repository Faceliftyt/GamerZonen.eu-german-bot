const Discord = require('discord.js');

module.exports = {
    name: 'bcmds',
    cooldown: 10,
    async run(bot, message, args) {
        
        
            let embed = new Discord.MessageEmbed()
            .setColor("#ff7d00")
            .setTitle("Bot Comands Menü")
            .setDescription(`Bot Commands Menü `)
            .addField("g!alist","Zeigt dir Bot Admin liste")
            
            
           
        
    
           .setTimestamp()
           .setFooter("GamerZonen.eu | g!support")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
  