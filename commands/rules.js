const Discord = require('discord.js')

module.exports = {
    name: "rules",
    description: "make rules  embed",

    async run(client, message,  args){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Dir Fehlt eine Berechtigung damit du diesen Command nutzen kannst!").then(msg => msg.delete({timeout:"5000"}));
        let beschreibung = args.slice(2).join(" ") 
        const error = new Discord.MessageEmbed() 
        .setColor('RANDOM')
        .setTitle('**❌EINGABE UNGÜLTIG❌**')
        .setDescription('`Regel Embed,  Beschreibung (Regeln))`')
        .setTimestamp()
        .setFooter("GamerZonen.eu/Regeln")

        
        if(!beschreibung) return message.lineReply(error)


        const rulesembed = new Discord.MessageEmbed()
        .setTitle(`**Regeln**`)
        .setColor("#0b14c5")
        .setDescription(beschreibung)
        .setTimestamp()
        .setFooter("GamerZonen.eu/Regeln")
        message.delete() // this deletes the command

        message.channel.send(rulesembed)
    }
}