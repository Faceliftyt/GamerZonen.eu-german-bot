const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give-role',
    run: async (client, message, args) => {

       

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.reply(":x:Ungülitge eingabe:x:. Es ist `<Benutzername || Benutzer-ID> <Rollenname || id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.reply('Der Benutzer hat diese Rolle bereits').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Rollen Name: ${roleName.name}`)
                 .setDescription(`${message.author}  erfolgreich ${roleName} gegeben zu  ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setTimestamp()
                 .setFooter("GamerZonen.eu").then(msg => msg.delete({timeout:"50000"}));

                 const embed1 = new MessageEmbed()
                 .setTitle(`Rollen Name: ${roleName.name}`)
                 .setDescription(`${message.author}  hat dir eine Rolle  gegeben `)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setTimestamp()
                 .setFooter("GamerZonen.eu")
                 member.send(embed1).then(msg => msg.delete({timeout:"50000"}));

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.reply('Entweder existiert diese Rolle nicht oder sie ist höher als du, bitte versuche es erneut...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}