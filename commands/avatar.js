const Discord = require('discord.js');

module.exports = {
    name: 'avatar',

    async run(bot, message, args) {
      
        if(message.content === 'avatar'){

if(!message.author.bot && message.guild){
    
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({dynamic : true});
     
      message.channel.send(`${member.username}´s avatar`)
      message.channel.send(avatar).then(msg => msg.delete({timeout:"50000"}));
      
    }
 }
}
}
