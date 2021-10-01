const Discord = require('discord.js')


module.exports = {
    name: "feedback",
    description: "feedback command (embed style)",

    async run (bot, message, args) {
        
        const channel = bot.channels.cache.get('872221268689190992')  

        if(!args[0]) return message.reply('Du hast vergessen dein Feedback mit hinzuschreiben!').then(msg => msg.delete({timeout:"5000"}));

        message.reply(`✉ | ${message.author.username}, Danke für die Rückmeldung! :)`).then(msg => msg.delete({timeout:"5000"}));

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Bot Feedback`)
        .addField(`Feedback`,`${args}`)
        .addField("Von Server:",`${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)
        channel.send(embed)
        
       
    }
}