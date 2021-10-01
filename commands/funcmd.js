const Discord = require('discord.js');

module.exports = {
    name: 'funcmd',
    cooldown: 10,
    async run(bot, message, args) {
        
        
            
    
    
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Fun Commands")
            .setDescription(`Fun'Commands`)
            .addField("g!dog","zeigt dir Hunde-Bilder")
            .addField("g!cat","zeigt dir  Katze-Bilder ")
            .addField("g!fox","zeigt dir Fuchs-Bilder")
            .addField("g!panda","zeigt dir  Panda-Bilder")
            .addField("g!bird","zeigt dir Vogel Bilder")
            .addField("g!koala","display a koala picture")
            .addField("g!avatar","zeige dir ein Profilbild eines Benutzers")
            .addField("g!ri","Informationen zur Rolle abrufen (Rollen-ID verwenden)")
            .addField("g!corona","siehe die Corona-Situation in den Ländern")
            .addField("g!ui","Holen Sie sich einige Informationen über den Benutzer")
            .addField("g!si","Holen Sie sich ein paar Informationen über den Server")
            .addField("g!embed","Erstelle deine eigene Einbettung durch denn bot")
            .addField("g!flip","Schätze mit deinen Freunden ab, ob du Kopf oder Zahl hast")
            .addField("g!wetter","zeigt das aktuelle Wetter an einem bestimmten Ort an")
            .addField("g1ttt","spiele Tic Tac Toe mit deinem Freunden")
            
            
        
    
            .setTimestamp()
            .setFooter("GamerZonen.eu")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
