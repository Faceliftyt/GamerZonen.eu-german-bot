const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bi",
    category: "bot",
    cooldown: 10,
    run: async (client, message, args) => {
        
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Portion ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Portion ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Portion ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Betritts Datum',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Angefordert von: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed).then(msg => msg.delete({timeout:"50000"}));
    }
}
