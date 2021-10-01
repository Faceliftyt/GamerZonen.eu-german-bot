const Discord = require('discord.js');

module.exports = {
    name: 'helpcmd',
    cooldown: 10,
    async run(bot, message, args) {
        
        
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Hilfe Menü")
            .setDescription(`Hilfe Menü `)
            .addField("In der Arbeit","Das Hilfemenü ist noch in Bearbeitung")
          
        
    
            .setTimestamp()
            .setFooter("GamerZonen.eu/Hilfe Menü")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };