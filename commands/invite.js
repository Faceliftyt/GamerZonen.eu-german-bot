const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    
    async run(bot, message, args) {
        
            let inviteEmbed = new Discord.MessageEmbed()
            .setTitle('Bot Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=825866389508194324&permissions=8&scope=bot')
                    
            message.author.send(inviteEmbed).then(msg => msg.delete({timeout:"10000"}))
            message.lineReply("Der Einladungslink befindet sich nun ihn deinen Dm´s")
            message.author.send(":warning:Der Einladungs Link wird in 10sekunden wieder aus denn Dm´s Gelöscht:warning:").then(msg => msg.delete({timeout:"5000"}))
    }
};
