const Discord = require('discord.js');

module.exports = {
    name: 'settings',
    cooldown: 10,
    async run(bot, message, args) {
        
            
    
    
            let embed = new Discord.MessageEmbed()
            .setColor("#ff0003")
            .setTitle("Bot Admin Commands")
            .setDescription(`Bot-Admin-Befehle`)
            .addField("g!bye","Mit diesen Befehl kann man denn Bot Herunterfahren")
            .addField("g!kill","Mit diesen Befehl kann man denn bot töten")
            .addField("g!restart","Mit diesen Befehl kann man denn Bot neustarten")
            
            
            

    
        
    
           .setTimestamp()
           .setFooter("GamerZonen.eu/Admin cmds")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
