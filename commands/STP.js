const Discord = require('discord.js')

module.exports = {
    name: "ssp",
    description: "rock paper scissors command",

    async run (bot, message, args) {
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Schere Steinpapier")
        .setDescription("Reagiere um zu Spielen!")
        .setTimestamp()
        
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("Ergebnis")
                .addField("Deine Entscheidung", `${reaction.emoji.name}`)
                .addField("Bot Entscheidung", `${me}`)
                await msg.edit(result)

                if((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "✂" && reaction.emoji.name === "📰") ||
                (me === "📰" && reaction.emoji.name === "🗻")) {
                    message.reply("Du hast leider verloren!");
                } else if (me === reaction.emoji.name) {
                    return message.reply("Es gab ein Unentschieden!").then(msg => msg.delete({timeout:"5000"}));
                } else {
                    return message.reply("Du hast gewonnen!").then(msg => msg.delete({timeout:"5000"}));
                }
            })
            .catch(collected => {
                message.reply('Spiel wurde abgebrochen, weil du nicht mehr geantwortet hast!').then(msg => msg.delete({timeout:"5000"}));
            }) 

    }
}