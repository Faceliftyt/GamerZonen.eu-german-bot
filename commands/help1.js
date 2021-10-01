const Discord = require('discord.js');

module.exports = {
    name: 'help',

    async run(bot, message, args) {
        message.delete
            let inviteEmbed = new Discord.MessageEmbed()
            .setTitle('Hilfe')
            .setDescription("Alle Commands Kannst du mit command g!cmds sehen")
            .addField("Falls du hilfe beim Bot benötigs enutze denn command","g!support")
            
                    
            message.lineReply(inviteEmbed).then(msg => msg.delete({timeout:"50000"}));
            
    }
};