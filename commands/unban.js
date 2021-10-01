const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));

        if (!args[0]) return message.channel.send('Bitte gebe die Benutzer-ID des Benutzers, den du entsperren möchten!').then(msg => msg.delete({timeout:"5000"}));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Benutzer ist unbekannt!').then(msg => msg.delete({timeout:"50000"}));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'Kein Grund';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`${user.user.tag} Entsperrt`)
                    .setColor('#00ff00')
                    .addField('Benutzer ID', user.user.id, true)
                    .addField('Benutzer Tag', user.user.tag, true)
                    .addField('Ban Grund', user.reason != null ? user.reason : 'Kein Grund')
                    .addField('Entban Grund', reason)
                    .setTimestamp()
                    .setFooter("GamerZonen.eu")
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed)).then(msg => msg.delete({timeout:"50000"}));
            } else {
                embed.setTitle(`Benutzer ${member.tag} ist nicht gebannt!`)
                    .setColor('#ff0000')
                message.channel.send(embed).then(msg => msg.delete({timeout:"5000"}));
            }

        }).catch(e => {
            console.log(e)
            message.channel.send(':x:FEHLER:x: Bitte kontaktiere Denn Support Server!').then(msg => msg.delete({timeout:"5000"}));
        });

    }
}