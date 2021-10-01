const Discord = require('discord.js');

module.exports = {
    name: 'mute',

    async run(bot, message, args) {
      
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        let reason = message.content.split(" ").slice(2).join(" ")
        
        if(!user) return message.lineReply("Du hast vergessen einen Benutzer zu erwähnen oder die Benutzer ID mit anzugeben").then(msg => msg.delete({timeout:"5000"}));
            

        if(!message.mentions.users.first) return message.lineReply("Dieser Benutzer ist  bereits stummgeschaltet!").then(msg => msg.delete({timeout:"5000"}));
        if (message.mentions.users.first().bot) {
            return message.channel.send("Bots können nicht gestummt werden").then(msg => msg.delete({timeout:"5000"}));
          }
      
          if (message.author.id === user.id) {
            return message.channel.send("Das Selbts stummen wird bei diesem Bot nicht mitgeliefert").then(msg => msg.delete({timeout:"5000"}));
          }
      
          if (user.id === message.guild.owner.id) {
            return message.channel.send(
              "Der Besitzer kann nicht Stummgeschaltet werden -_-"
            ).then(msg => msg.delete({timeout:"5000"}));
          }
        if(!reason) reason = "Kein grund"

        const target = message.mentions.users.first();
 if(target){   
  let mainRole1 = message.guild.roles.cache.find(role => role.name === 'Member');
 let mainRole = message.guild.roles.cache.find(role => role.name === 'Mitglied');
 let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Mitglieder');
 let mainRole3 = message.guild.roles.cache.find(role => role.name === '「Community」')
 let muteRole = message.guild.roles.cache.find(role => role.name === 'Stumm');
 let muteRole1 = message.guild.roles.channel.find(role => role.name === 'Muted')
 
 let memberTarget= message.guild.members.cache.get(target.id);

 memberTarget.roles.remove(mainRole.id);
 memberTarget.roles.remove(mainRole1.id);
 memberTarget.roles.remove(mainRole2.id);
 memberTarget.roles.remove(mainRole3.id);
 memberTarget.roles.add(muteRole.id);
 memberTarget.roles.add(muteRole1)

    
        let embed = new Discord.MessageEmbed()
        .setTitle("Muted!")
        .setDescription(`<@!${user.id}> gestummt mit dem Grund:||${reason}||`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("GamerZonen.eu")
        user.send(`Du wurdest stummgeschaltet auf **${message.guild.name}** wegen ${reason}`);
        message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Muted!")
        .setDescription(`Du wurdest auf **${message.guild.name}** gestummt mit dem Grund:||${reason}||`)
        .addField("Moderator:",`${message.author}`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("GamerZonen.eu")
        
        message.lineReply(embed1).then(msg => msg.delete({timeout:"50000"}));

       

    }
}
};