module.exports = {
    name: "kill",
    category: "owner",
    run: async (client, message, args) => {
        
        if (message.author.id !== '640256514267021314')
        if (message.author.id !== '759528653708853308') 
        if (message.author.id !== '752192188070494269') {
            return message.reply(`Dieser Befehl steht nur einem Bot-Admin zur Verfügung!`)
        }
       
        await message.lineReply(`Bot wurde gekillt !`)
         console.log(`Bot wurde gekillt von Admin: ${message.member.user.tag}!`)
        client.destroy();
        console.log('--------Bot-getötet!--------')
        
    }
}