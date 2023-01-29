const {MessageEmbed} = require('discord.js')
const config = require('../config')
class commandping {
    constructor() {
        this.name = "ping"
        this.description = "Affiche la latence du bot"
    }

    async execute(interaction, client ) {  

		const embed = new MessageEmbed()
            .setColor('#00eaff')
            .setTitle('⚙️ㅤLatenceㅤ⚙️')
            .addField("Latence de l'API ", `${Date.now() - interaction.createdTimestamp}ms`, true)
            .addField("Latence du bot  ", `${Math.round(client.ws.ping)}ms`, true)
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
        

    }
}

module.exports = commandping