const Discord = require('discord.js');

module.exports = {
    name: 'ecmd',
    cooldown: 10,
    async run(bot, message, args) {
        
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":x:Fehler:x:")
            .setDescription(`Dieser Command existiert nicht mehr`)
            
            
        
    
            .setTimestamp()
            .setFooter("GamerZonen.eu")
            
            message.channel.send(embed).then(msg => msg.delete({timeout:"5000"}));
        }
    };