const Discord = require('discord.js');

module.exports = {
    name: 'reply',

    async run(bot, message, args) {
        
    
        let text = message.content.split(" ").slice(1).join(" ")
        
        if(!text) return message.lineReply("Du hast vergessen einen text mit anzugeben denn ich wiederholen soll.")

        
       message.lineReply(`${message.author} sagt:, ${text}`).then(msg => msg.delete({timeout:"50000"}));
         
        
    }
};