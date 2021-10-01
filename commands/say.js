const Discord = require('discord.js');

module.exports = {
    name: 'say',

    async run(bot, message, args) {
        
    
        let text = message.content.split(" ").slice(1).join(" ")
        
        if(!text) return message.lineReply("Du hast vergessen einen text mit anzugeben.")

        
        message.channel.send(text).then(msg => msg.delete({timeout:"50000"}));
         
        
    }
};