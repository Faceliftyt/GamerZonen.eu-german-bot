const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));

        if (!args[0]) return message.channel.send('Du hast vergessen eine zeit anzugeben!').then(msg => msg.delete({timeout:"5000"}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'Kein Grund';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Der Slow-Modus ist bereits deaktiviert').then(msg => msg.delete({timeout:"5000"}));

            embed.setTitle('Slow-Modus deaktiviert')
                .setColor('#00ff00')
                .setFooter("GamerZonen.eu | g!support")
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send(':x:ungültige Zeit:x:, bitte versuchen Sie es erneut!').then(msg => msg.delete({timeout:"10000"}));

        if (time >= 21600) return message.channel.send('Das Limit für den Slow-Modus ist zu hoch, bitte geben Sie etwas unter 6 Stunden ein.').then(msg => msg.delete({timeout:"5000"}));

        if (currentCooldown === time) return message.channel.send(`Der Slow-Modus ist bereits eingestellt auf   ${args[0]}`).then(msg => msg.delete({timeout:"5000"}));

        embed.setTitle('Slowmode aktiv')
            .addField('Slowmode: ', args[0])
            .addField('Grund: ', reason)
            .setColor('#ff0000')
            .setTimestamp()
            .setFooter("GamerZonen.eu")

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed)).then(msg => msg.delete({timeout:"50000"}));

    }
};
