const db = require("quick.db")

module.exports = {
  name: "warns",
  description: "Get the warnings of yours or mentioned person",
  category: "moderation",
  run: (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!");
    }   
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`Warnungen_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} hat **${warnings}** verwarnungen`)
  
  
  }
}



