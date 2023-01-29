const Discord = require("discord.js")
const config = require("../config");

class commandavatar { 
    constructor() {
        this.name = "avatar"
        this.description = "Affiche l'avatar d'une personne"
        this.options = [
            { type: 'USER', name: "personne", description: "La personne auquel vous voulez afficher l'avatar", required: true },

        ]
    }

    async execute(interaction) {

        const member = interaction.options.getUser("personne")
        
        const embed = new Discord.MessageEmbed()
            //.setFooter("CratiaCity")
            .setColor(`RANDOM`)
            .setTimestamp()
            .setTitle(`Avatar de ${member.username}`)
            .setDescription(`[Avatar de ${member.username}](${member.displayAvatarURL({ dynamic: true, size: 4096 })})`)
            .setImage(member.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()
        interaction.reply({ embeds: [embed] }) 
     
    }
}

module.exports = commandavatar