const { tictactoe } = require('reconlx')

module.exports = {
    name: "ttt",
    description: "tic tac toe command",

    async run (bot, message, args) {
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!member) return message.channel.send('Du hast vergessen einen Benutzer zu erwähnen damit er mitspielen kann').then(msg => msg.delete({timeout:"5000"}));

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}