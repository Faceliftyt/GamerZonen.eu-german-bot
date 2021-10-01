const Discord = require('discord.js')

module.exports = {
    name: "ping", //command name, e.g. of what you would send in chat: .ping
    description: "ping command",

    async run (bot, message, args) {

        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
        .setTimestamp()
        

        message.channel.send(ping).then(msg => msg.delete({timeout:"50000"}));
    }
};