const Discord = require('discord.js')


module.exports = {
    name: "sreport",
    description: "server report command (embed style)",

    async run (bot, message, args) {
        
        const channel = bot.channels.cache.get('872197473085554708')  

        if(!args[0]) return message.reply('Du hast vergessen einen Grund mit anzugeben!').then(msg => msg.delete({timeout:"5000"}));

        message.reply(`Danke für denn Server Report ein Bot Admin wird sich bei dir melden ob der Bot vom Server Fligt oder nicht! :)`).then(msg => msg.delete({timeout:"5000"}));

        const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`Server Report`)
        .addField(`Grund:`,`${args}`)
        .addField(`Author:`,`${message.author}`)
        .addField("Von Server:",`${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)
        channel.send(embed)
        
       
    }
}