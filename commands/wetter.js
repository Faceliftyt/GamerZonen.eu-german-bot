const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "wetter",
    description: "shows the current weather in a specified location",

    async run (bot, message, args) {
        
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Du hast vergessen einen Standort/Stadt anzugeben!')

            if(result === undefined || result.length === 0) return message.channel.send('**Ungültiger Standort!!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setTitle(`Das Wetter in ${current.observationpoint}`)
            .setDescription(current.skytext)
            .setThumbnail(current.imageUrl)
            .setColor("RANDOM")
            .setTimestamp()
            .addField("Zeitzone:: ", `UTC${location.timezone}`, true)
            .addField('Abschlussart', 'Celsius', true)
            .addField("Temperatur: ", current.temperature + "*C", true)
            .addField('Wind', `${current.winddisplay}`, true)
            .addField('Fühlt sich an wie', `${current.feelslike}°`, true)
            .addField('Feuchtigkeit', `${current.humidity}%`, true)
            .setFooter("GamerZonen.eu")

            message.lineReply(embed)
        })
    }
}