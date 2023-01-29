const {MessageEmbed } = require('discord.js');
const config = require('../config.js');

class suggest {
    constructor() {
        this.name = "suggestion"
        this.description = "Créer une suggestion"
        this.options = [
            { type: 'STRING', name: "idee", description: "Ecrit ton idée", required: true },
            
        ]
    }

    async execute(interaction, client) {

        const msg = interaction.options.getString("idee")

        const suggest = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("💡ㅤSuggestion")
        .setDescription(`${msg}`)
        .setFooter({ text: `Suggestion de ${interaction.member.displayName}` , iconURL: config.logo })
        .setTimestamp()

            client.channels.cache.get('741960795071709216').send({embeds: [suggest]});
        	interaction.reply({ content: "La suggestion a bien été effectué !", ephemeral: true })
                }
}

module.exports = suggest