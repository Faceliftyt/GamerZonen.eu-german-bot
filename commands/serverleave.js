const Discord = require('discord.js');


module.exports = {
    name: 'bkick',

    async run(bot, message, args) {
        
        const embed = new Discord.MessageEmbed()
        .setTitle(':x:Fehler:x:!')
        .setColor("#ff0000")
        .addField("Dieser Command ist derzeit nicht verfügbar","Da ausversehen was gelöscht wurde")
        .setFooter("GamerZonen.eu")
        message.lineReply(embed).then(msg => msg.delete({timeout:"5000"}));
    }
}