module.exports = (client) => {
    const channelId = "859875984470573106";
    const rulesChannel = "859875670124265492";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Willkommen<@${
        member.id
      }> Auf **GamerZonen.de**! Bitte lese dir ungedingt unsere Regeln durch  ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };