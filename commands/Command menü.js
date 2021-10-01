const Discord = require('discord.js');

module.exports = {
    name: 'cmds',
    cooldown: 10,
    async run(bot, message, args) {
        
        
            let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Command Menü")
            .setDescription(`Command 'Menü `)
            .addField("g!modcmd","Mit diesen Befehl kann man die Moderator-/Admin-Befehle sehen")
            .addField("g!funcmd","Mit diesem Befehl kann man lustige Befehle sehen")
            .addField("g!helpcmd","Mit diesen Befehl kann man das Hilfemenü sehen")
            .addField("g!bcmds","Mit diesen Befehl kann man bot Befehle sehen ")
            .addField("g!invite","Mit diesen Befehl kann man denn Bot einladen")
            .addField("g!support","Mit diesen Befehl kann man auf denn Support-Server")
            .addField("g!settings","Mit diesen Befehl kann man die Bot-Einstellungen sehen")
        
    
           .setTimestamp()
           .setFooter("GamerZonen.eu/cmds")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
  