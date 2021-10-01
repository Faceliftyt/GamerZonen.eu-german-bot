const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'remove-role',
    run: async (client, message, args) => {

        

        if (!message.member.permissions.has('MANAGE_ROLES')) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.lineReply("B:x:Ungülitge eingabe:x:. Es ist `<Benutzername || Benutzer-ID> <Rollenname || id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

            

             const embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`Rolle ${roleName} erfolgreich entfernt von  ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setTimestamp()
                 .setFooter("GamerZonen.eu | g!support").then(msg => msg.delete({timeout:"50000"}));

                 const embed1 = new MessageEmbed()
                 .setTitle(`Rollen Name: ${roleName.name}`)
                 .setDescription(`${message.author} hat dir eine Rolle Entzogen `)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setTimestamp()
                 .setFooter("GamerZonen.eu | g!support")
                 member.send(embed1).then(msg => msg.delete({timeout:"50000"}));

            return member.roles.remove(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.lineReply('Entweder existiert diese Rolle nicht oder sie ist höher als du, bitte versuche es noch einmal...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}