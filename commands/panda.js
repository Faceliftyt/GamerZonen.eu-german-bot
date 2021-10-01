const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "panda",
    category: "animals",
    run: async (client, message, args) => {
        
        const url = "https://some-random-api.ml/img/panda";
        

        let image, response;
        
        try {
            response = await axios.get(url);
            image = response.data;

           
        } catch (e) {
            return message.lineReply(`Ein Fehler ist aufgetreten, versuchen Sie es erneut!!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Panda Bild`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)
            .setTimestamp()
           
        await message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
    }
}