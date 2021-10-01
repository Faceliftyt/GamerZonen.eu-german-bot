const Discord = require('discord.js');

module.exports = {
    name: 'unmute',

    async run(bot, message, args) {
      
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));
        
        let user = message.mentions.users.first()
        let reason = message.content.split(" ").slice(2).join(" ")
        
       
        if (message.mentions.users.first().bot) {
            return message.channel.send("Bots können nicht gestummt/entstummt werden").then(msg => msg.delete({timeout:"5000"}));
          }
      
          if (message.author.id === user.id) {
            return message.channel.send("Eigene Stummschaltungen können nicht augehoben werden").then(msg => msg.delete({timeout:"5000"}));
          }
      
          if (user.id === message.guild.owner.id) {
            return message.channel.send(
              "Der Besitzer kann nicht gestummt/entstummt werden -_-"
            ).then(msg => msg.delete({timeout:"5000"}));
          }
        if(!reason) reason = "Kein Grund"

        const target = message.mentions.users.first();
 if(target){   
  let mainRole1 = message.guild.roles.cache.find(role => role.name === 'Member'); 
  let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Mitglieder');
 let mainRole = message.guild.roles.cache.find(role => role.name === 'Mitglied');
 let mainRole3 = message.guild.roles.cache.find(role => role.name === '「Community」');
 let muteRole = message.guild.roles.cache.find(role => role.name === 'Stumm');
 let muterole1 = message-guild.roles.channel.find(role => role.name === 'Muted')
 
 let memberTarget= message.guild.members.cache.get(target.id);

 memberTarget.roles.remove(muteRole.id);
 memberTarget.roles.remove(muterole1)
 memberTarget.roles.add(mainRole.id);
 memberTarget.roles.add(mainRole1.id);
 memberTarget.roles.add(mainRole2.id);
 memberTarget.roles.add(mainRole3.id);

    
        let embed = new Discord.MessageEmbed()
        .setTitle("Entstummt!")
        .setDescription(`<@!${user.id}> wurde  entstummt`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("GamerZonen.eu")
        
        user.send(`Du würdest auf **${message.guild.name}** entstummt`);
        message.channel.send(embed)
    }
}
}
