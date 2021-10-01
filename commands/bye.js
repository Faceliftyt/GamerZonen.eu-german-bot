module.exports = {
    name: "bye",
    category: "owner",
    run: async (client, message, args) => {
        
        if (message.author.id !== '640256514267021314')
        if (message.author.id !== '759528653708853308')
        if (message.author.id !== '752192188070494269'){
            return message.reply(`Dieser Befehl steht nur einem  Bot-Admin zur Verfügung!`).then(msg => msg.delete({timeout:"5000"}));
        }
        await message.lineReply(`Bot wurde heruntergefahren! Admin war:${message.member.user.tag}`)
        console.log(`Bot wurde heruntergefahren von Admin: ${message.member.user.tag}!`)
        
        client.destroy();
        console.log('--------Bot heruntergefahren!--------')
        
    }
}