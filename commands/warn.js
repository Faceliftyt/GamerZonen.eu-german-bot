const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send(":x:Ungültige eingabe:x:  - warne so  @Erwähnen <Grund>").then(msg => msg.delete({timeout:"5000"}));
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bots können nicht verwarnt werden").then(msg => msg.delete({timeout:"5000"}));
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Das Selbst warnen wird bei diesem Bot nicht unterstützt").then(msg => msg.delete({timeout:"5000"}));
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Besitzer können nicht verwanrt werden -_-").then(msg => msg.delete({timeout:"5000"}));
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send(":x:Ungültige eingabe:x: du hast vergessen einen Grund mit anzugeben - warne @Erwähnung <Grund>").then(msg => msg.delete({timeout:"10000"}));
    }
    
    let warnings = db.get(`Warnungen_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} ist leider schon mit 3 Verwarnungen am Limit`).then(msg => msg.delete({timeout:"10000"}));
    }
    
    if(warnings === null) {
      db.set(`Warnungen_${message.guild.id}_${user.id}`, 1)
      user.send(`Du wurdest auf **${message.guild.name}** wegen ${reason} von ${message.author} verwarnt!`)
      await message.channel.send(`Du hast **${message.mentions.users.first().username} **verwarnt wegen ${reason}`)
    } else if(warnings !== null) {
        db.add(`Warnungen_${message.guild.id}_${user.id}`, 1)
       user.send(`Du wurdest auf **${message.guild.name}** wegen ${reason} von ${message.author} verwarnt!`)
      await message.channel.send(`Du hast **${message.mentions.users.first().username}** verwarnt wegen ${reason}`)
    }
    
  
  } 
}