const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "kick",
    description: "kick command",

    async run (bot, message, args) {
        
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"50000"}));

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "Ohne Grund";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Du wurdest getreten von ** ${message.guild.name} **`)
        .setDescription(`Grund: ${reason}`)
        .addField(`Moderator:`, message.author)
        .setColor("#ff0000")
        .setTimestamp()
       

        if (!args[0]) return message.lineReply("Du hast vergessen einen Benutzer zu erwähnen!");
        if(mentionMember.id ==  message.author.id)return message.lineReply("Selbts kicken wird bei diesen Bot nicht nicht unterstützt!").then(msg => msg.delete({timeout:"5000"}));
        


        
        if(!mentionMember) return message.lineReply("Dieser Benutzer ist kein gültiger Benutzer und befindet sich wahrscheinlich nicht auf diesem Server!").then(msg => msg.delete({timeout:"5000"}));

        if(!mentionMember.kickable) return message.lineReply("Benutzer könnte leider nicht gekickt werden!...").then(msg => msg.delete({timeout:"5000"}));

        await mentionMember.send(embed);
        await mentionMember.kick({
            reason: reason
        }).then(() => message.lineReply(mentionMember.user.tag + "Erfolgreich gekickt")).then(msg => msg.delete({timeout:"50000"}));
    

        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.lineReply("Benutzer könnte leider nicht gekickt werden!...").then(msg => msg.delete({timeout:"5000"}));
        }
    


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.lineReply("Benutzer könnte leider nicht gekickt werden!...").then(msg => msg.delete({timeout:"5000"}));
        
        
        
        
        
        }
    }
}


