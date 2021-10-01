const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'ri',
    run: async (client, message, args) => {
        
        // code starts here
        try {
            const roleName = message.guild.roles.cache.find(r => (r.name === args.toString()) || (r.id === args.toString()))
            console.log(roleName)
            const perms = new Permissions(roleName.permissions.bitfield).toArray()

            const embed = new MessageEmbed()
                .setColor(roleName.color)
                .setTitle(roleName.name)
                .setTimestamp()
                
                .addFields(
                    {
                        name: 'Rollen ID: ',
                        value: roleName.id,
                        inline: true
                    },
                    {
                        name: 'Rollen Name: ',
                        value: roleName.name,
                        inline: true
                    },
                    {
                        name: 'Gruppiert: ',
                        value: roleName.mentionable ? 'JA' : 'NEIN',
                        inline: true
                    },
                    {
                        name: 'Rolleb Perms: ',
                        value: perms.join(', ')
                    }
                )

            await message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));

        } catch (e) {
            return message.lineReply('Entweder hast du  vergessen eine Rolle anzugeben oder diese Rolle existiert nicht').then(() => console.log(e))
        }

    }
}
