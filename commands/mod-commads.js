const Discord = require('discord.js');

module.exports = {
    name: 'modcmd',

    async run(bot, message, args) {
            
    
    
            let embed = new Discord.MessageEmbed()
            .setColor("#cf4006")
            .setTitle("Mod Commands")
            .setDescription(`Moderator'Commands `)
            .addField("g!ban","Mit diesem Befehl können Personen gebannt werden")
            .addField("g!unban","Mit diesem Befehl können Personen entbannt werden")
            .addField("g!kick","Mit diesem Befehl können Leute getreten werden")
            .addField("g!warn","Mit diesem Befehl können Benutzer warnt werden (Die Warnungen werden nicht mit dem Grund gespeichert, aber sie können ein Sreenshot davon machen)")
            .addField("g!give-role","Mit diesem Befehl können Rollen einem Benutzer gegeben werden")
            .addField("g!remove-role","Mit diesem Befehl können Rollen einem Benutzer entfernt werde")
            .addField("g!slowmode","Mit diesem Befehl kann ein Slowmode eingerichtet werden")
            .addField("g!clear","Mit diesem Befehl kann ein kanal geleert werden")
            .addField("g!mute","Mit diesem Befehl können Benutzer gestummt werden","(Rollen erforderlich Mitgliedsrolle (Mitglied), MuteRole: (Stumm))")
            .addField("g!unmute","Mit diesem Befehl können Benutzer Entstummt werden")
            .addField("Infos zum Mute-Befehl","**Kanäle müssen noch Manuel von einem Admin bearbeitet werden damit user nicht mehr schreiben können**")
            .addField("g!warn","Mit diesem Befehl kann ein Benutzer verwarnt werden")
            .addField("g!warns","Mit diesem Befehl können sie warnungen einem Benutzer Kontrolliert werden")
            .addField("g!delwarns","Mit diesem Befehl können warnung eines Benutzer gelöscht werden")
    
        
    
            .setTimestamp()
            .setFooter("GamerZonen.eu/Moderator cmds")
            
            message.lineReply(embed).then(msg => msg.delete({timeout:"50000"}));
        }
    };
