const Discord = require('discord.js');

module.exports = {
    name: 'alist',
    cooldown: 10,
    async run(bot, message, args) {
        
        
        
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Bot Adminliste")
            .addField("Owner","Facelift/Ben#2007")
            .addField("Co Owner","Shadowhater#4550")
            .addField("IT Admin","JosuaDev#0001")
            
            
        
    
           .setTimestamp()
           .setFooter("GamerZonen.eu | g!support")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
  