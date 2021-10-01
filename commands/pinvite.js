const Discord = require('discord.js');

module.exports = {
    name: 'pinvite',
    
    async run(bot, message, args) {
        if (message.author.id !== '640256514267021314')
        if (message.author.id !== '759528653708853308') 
        if (message.author.id !== '752192188070494269') {
            return message.reply(`Der Permanete bot Invite steht nur einem Bot-Admin zur Verfügung!`)
        }
        
            let inviteEmbed = new Discord.MessageEmbed()
            .setTitle('Bot Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=825866389508194324&permissions=8&scope=bot')
                    
            message.author.send(inviteEmbed)
            message.lineReply("Der Permanete Einladungslink befindet sich nun ihn deinen Dm´s")
            message.author.send(":warning:Der Einladungs Link ist Permanet du kannst ihn immer verwenden wann du möchtest :warning:").then(msg => msg.delete({timeout:"10000"}))
    }
};
