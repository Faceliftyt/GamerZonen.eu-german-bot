const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cat",
    category: "animals",
    cooldown: 10,
    run: async (client, message, args) => {
        
        const url = "https://some-random-api.ml/img/cat";
        

        let image, response;
        
        try {
            response = await axios.get(url);
            image = response.data;

           

        } catch (e) {
            return message.channel.send(`Ein Fehler ist aufgetreten, versuche es erneut!`).then(msg => msg.delete({timeout:"5000"}));
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Cat Bild`)
            .setColor(`#f3f3f3`)
             .setImage(image.link)

        await message.channel.send(embed).then(msg => msg.delete({timeout:"5000"}));
    }
}