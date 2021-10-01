const { MessageEmbed } = require('discord.js');
const { addBack } = require('cheerio/lib/api/traversing');
const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));

        const user = message.mentions.members.first() || user.user.id(args[0]);
       
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Kein Grund angegeben";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Du wurdest gesperrt von **${message.guild.name}**`)
        .setDescription(`Grund: ${reason}`)
        .addField(`Moderator:`, message.author)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter("GamerZonen.eu | BanSystem")
      
        if (!args[0]) return message.lineReply("Du hast vergessen einen Benutzer zu erwähnen oder die ID mit anzugegeben!").then(msg => msg.delete({timeout:"5000"}));
        if(user ==  message.author.id)return message.lineReply("Das selbts bannen wird bei diesem Bot nicht unterstützt!").then(msg => msg.delete({timeout:"50000"}));
       

        

        if(!user) return message.lineReply(":warning:Dieser Benutzer oder die ID ist Ungültig:warning:!").then(msg => msg.delete({timeout:"5000"}));

        if(!user.bannable) return message.lineReply("Benutzer konnte nicht gesperrt werden!").then(msg => msg.delete({timeout:"5000"}));
       

        await user.send(embed);
        await user.ban({
            reason: reason
        }).then(() => message.lineReply(user.user.tag + "Benutzer erfolgreich gesperrt mit dem Grund:"`${reason}`)).then(msg => msg.delete({timeout:"50000"}));
      
        



      

    }

}
