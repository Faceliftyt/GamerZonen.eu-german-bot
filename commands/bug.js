const Discord = require('discord.js')

module.exports = {
    name: "bugreport",
    description: "ban command",

    async run (bot, message, args) {
        
     


   

        const embed = new Discord.MessageEmbed()
        .setTitle(':x:Fehler:x:!')
        .setColor("#ff0000")
        .addField("Dieser Command ist nicht mehr verfügbar","geändert auf g!bug")
        .setFooter("GamerZonen.eu")
        message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
       
       

        
    }

};