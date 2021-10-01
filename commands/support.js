const Discord = require('discord.js');

module.exports = {
    name: 'support',

    async run(bot, message, args) {
        
            let supportEmbed = new Discord.MessageEmbed()
            .setTitle('Support Server')
            .setURL('https://discord.gg/b7tJPPQZwR')
            .setTimestamp()
            .setFooter("GamerZonen.eu | g!support")       
            message.author.send(supportEmbed).then(msg => msg.delete({timeout:"10000"}))
            message.lineReply("Der Support server Link befindest sich in deinen Dm´s")
            message.author.send(":warning:Der Support Server invite wird in 10 sekunden wieder aus denn Dm´s Gelöscht:warning:").then(msg => msg.delete({timeout:"5000"}))
    }
};