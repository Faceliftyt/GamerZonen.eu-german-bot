const db = require("quick.db")

module.exports = {
  name: "delwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));
    }
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    if(!user) {
    return message.channel.send("Du hast vergessen einen Benutzer zu erwähnen").then(msg => msg.delete({timeout:"5000"}));
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bots können keine  Warnungen haben / erhalten").then(msg => msg.delete({timeout:"5000"}));
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Eigene Verwarnungen können nicht gelöscht werden").then(msg => msg.delete({timeout:"5000"}));
    }
    
    let warnings = db.get(`Warnungen_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} kann keine Warnungen haben`).then(msg => msg.delete({timeout:"5000"}));
    }
    
    db.delete(`Warnungen_${message.guild.id}_${user.id}`)
    user.send(`Alle Deine Warnungen würden zurückgesetzt von ${message.author} auf  ${message.guild.name}`).then(msg => msg.delete({timeout:"50000"}));
    await message.channel.send(`Alle Warnungen von zurücksetzt ${message.mentions.users.first().username}`).then(msg => msg.delete({timeout:"50000"}));
    
  
    
}
}















