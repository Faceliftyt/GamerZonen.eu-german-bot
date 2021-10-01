const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "delete",
    category: "moderation",
    run: async (client, message, args) => {
        
     

        if (message.author.id !== '640256514267021314')  // sets the permission
        return message.lineReply("Dieser Befehl steht nur einem Bot-Admin zur Verfügung!") // returns this message to user with no perms
    if (!args[0]) 
        if (!args[0]) {
            return message.reply(`bitte gib beim nächsten mal eine Zahl von 1 bis 100 ein`).then(m => m.delete({ timeout: 5000 }))
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`Moderator ${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`${deleteAmount} Nachrichten wurden gelöscht`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')





            .setTimestamp()
        await message.channel.send(embed).then(msg => msg.delete({timeout:"5000"}));
    }
}