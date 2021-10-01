const Discord = require('discord.js');

module.exports = {
    name: 'esay',

    async run(bot, message, args) {
        
    
        let text = message.content.split(" ").slice(1).join(" ")
        
        if(!text) return message.reply("Du hast vergessen einen Text mit anzugeben.").then(msg=>msg.delete({timeout:"50000"}))
        
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(text)
        .setTimestamp()
        .setFooter("GamerZonen.eu")
        message.channel.send(embed).then(msg => msg.delete({timeout:"50000"}));
    }
};
