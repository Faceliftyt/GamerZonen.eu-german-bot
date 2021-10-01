const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "extra",
    cooldown: 10,
    run: async (client, message, args) => {
        
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.lineReply(`***${args[0]}*** existiert nicht oder es werden keine Daten gesammelt`).then(msg => msg.delete({timeout:"0000"}));
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Gesamtzahl der Corona-Fälle weltweit')
            .setColor('#fb644c')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: 'Gesamtzahl der Fälle:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Gesamtzahl der Todesfälle:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total wiederhergestellt:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Aktuelle Fälle:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Kritische Fälle:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Heute erholt:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Die heutigen Todesfälle:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
    }
};