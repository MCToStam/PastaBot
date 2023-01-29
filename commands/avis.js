const {MessageEmbed } = require('discord.js');
const config = require('../config.js');

class commandfeedback {
    constructor() {
        this.name = "avis"
        this.description = "Donne un avis au développeur"
        this.options = [
            { type: 'STRING', name: "description", description: "Ton avis", required: true },
        ]
    }

    async execute(interaction, client) {

        const msg = interaction.options.getString("description")

        const embedyes = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("📨ㅤAvisㅤ📨")
            .setDescription(`**Votre avis:** \n \`${msg}\` \n`)
            .addField("Merciㅤ\n", `\`\`Votre avis va nous aider à améliorer ce bot\`\``, true)
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()

            interaction.reply({embeds: [embedyes]})

        const embed2 = new MessageEmbed()
            .setColor("ORANGE")
            .setTitle("📨ㅤAvisㅤ📨")
            .setDescription(`**Avis:** \n \`${msg}\`\n`)
            .addField("Avis de", `${interaction.member}`, true)
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()

        client.channels.cache.get('CHANNEL_ID').send({embeds: [embed2]});
    }      
}
module.exports = commandfeedback
