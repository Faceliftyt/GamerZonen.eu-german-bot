const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ui",
    category: "extra",
    run: async (client, message, args) => {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Infos`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setTimestamp()
            .setFooter("GamerZonen.eu")
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar : ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Erstellungsdatum: ',
                    value: user.user.createdAt.toLocaleDateString("de-eu"),
                    inline: true
                },
                {
                    name: 'Beitrittsdatum: ',
                    value: user.joinedAt.toLocaleDateString("de-eu"),
                    inline: true
                },
                {
                    name: 'Benutzer rollen: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
                
            )

        await message.channel.send(embed)
    }
}






