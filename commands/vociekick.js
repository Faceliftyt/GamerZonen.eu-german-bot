module.exports = {
    name: "vkick",
    category: "moderation",
    run: async (client, message, args) => {
      
      if (!message.member.hasPermission(["MOVE_MEMBERS"]))
        return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!");
  
      if (!message.mentions.members.first())
        return message.lineReply(
          `Du hast vergessen einen Benutzer zu erwähnen der aus dem Kanal fliegen soll!`
        );
       

      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`Der Benutzer befindet sich in keinem Sprachkanal!`);
  
      message.mentions.members.first().voice.kick();
      
      message.lineReply(`${user.user.id}`,'wurde aus dem Sprachkanal geworfen!')
    }
  };

  