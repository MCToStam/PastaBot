const {MessageEmbed } = require('discord.js');
const config = require('../config.js');

class achat {
    constructor() {
        this.name = "achat"
        this.description = "Créer un achat"
        this.options = [
            { type: 'STRING', name: "pseudo", description: "Pseudo de l'acheteur", required: true },
            { type: 'STRING', name: "objet", description: "Objet acheté", required: true },
            { type: 'STRING', name: "quantite", description: "Quantité d'objet", required: true },
            { type: 'STRING', name: "prix", description: "Prix total", required: true },
            { type: 'STRING', name: "commande", description: "Nombre total de commande", required: true },
            
        ]
    }

    async execute(interaction, client) {

        const pseudo = interaction.options.getString("pseudo")
        const objet = interaction.options.getString("objet")
        const quantite = interaction.options.getString("quantite")
        const prix = interaction.options.getString("prix")
        const presence = interaction.options.getString("commande")

        const achat = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("🛒 Achat")
        .setDescription(`Acheteur : ${pseudo}\nObjet : ${objet}\nQuantité : ${quantite}\nPrix total : ${prix}`)
        .setFooter({ text: `Achat éffectué par ${interaction.member.displayName}` , iconURL: config.logo })
        .setTimestamp()

            client.channels.cache.get('CHANNEl_ID').send({embeds: [achat]});
            interaction.reply({ content: "L'achat a bien été effectué !", ephemeral: true })
      	    client.user.setPresence({ activities: [{ name: `PastaPvP V3 | ${presence} commandes effectués` }], status: 'WATCHING' });
                };
};

module.exports = achat
