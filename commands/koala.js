const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "koala",
    category: "animals",
    run: async (client, message, args) => {
        
        const url = "https://some-random-api.ml/img/koala";
       

        let image, response;
        
        try {
            response = await axios.get(url);
            image = response.data;

           

        } catch (e) {
            return message.channel.send(`Ein Fehler ist aufgetreten, versuchen Sie es erneut!!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Koala Bild`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)
            .setTimestamp()
           
        await message.channel.send(embed).then(msg => msg.delete({timeout:"50000"}));
    }
}