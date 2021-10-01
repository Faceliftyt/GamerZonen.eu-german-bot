const Discord = require('discord.js')

module.exports = {
    name: "bug",
    description: "ban command",

    async run (bot, message, args) {
        
     


    const channel = bot.channels.cache.get('874650384109551616')


    const text = args.join(' ');
    if(!text) return message.reply('Du hast vergessen denn Fehler mit anzugeben')

          const reportEmbed = new Discord.MessageEmbed()
        .setTitle('Neuer Fehler!')
        .setColor("#ff0000")
        .addField('Author', message.author.toString(), true , message.author.id)
        .addField('Server', message.guild.name, true)
        .addField('Fehler', text)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        //send the embed to the channel
        
        message.lineReply("Du hast eine Bestätigung der Meldung erhalten").then(msg => msg.delete({timeout:"10000"}));
 
        channel.send(`<@&879459765699346552>  Ein neuer Fehler wurde von ${message.author} gefunden`).then(msg => msg.delete({timeout:"10000"}));
        

        const report1Embed = new Discord.MessageEmbed()
        .setTitle('Fehler gesendet!')
        .setColor("#ff0000")
        .addField('Author', message.author.toString(), true , message.author.id)
        .addField('Server', message.guild.name, true)
        .addField('Fehler', text)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setFooter("Fehler Bestätigung")
        message.author.send(report1Embed).then(msg => msg.delete({timeout:"50000"}));
       

        
    }

};
