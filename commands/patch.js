const {MessageEmbed } = require('discord.js');
const config = require('../config.js');

class patch {
    constructor() {
        this.name = "patch-note"
        this.description = "Créer un patch-note"
        this.options = [
            { type: 'STRING', name: "numero", description: "Numéro du patch-note (ex: 4.5)", required: true },
            { type: 'STRING', name: "patch", description: "Description du patch-note", required: true },
            
        ]
    }

    async execute(interaction, client) {

        const numero = interaction.options.getString("numero")
        const patch = interaction.options.getString("patch")

        const patchnote = new MessageEmbed()
        .setColor("RED")
        .setTitle(`📢 Patch-Note ${numero}`)
        .setDescription(`${patch}`)
        .setFooter({ text: `Patch-Note de ${interaction.member.displayName}` , iconURL: config.logo })
        .setTimestamp()

            client.channels.cache.get('1050061319514095626').send({embeds: [patchnote]});
        	interaction.reply({ content: "Le patch a bien été effectué !", ephemeral: true })
                }
}

module.exports = patch
