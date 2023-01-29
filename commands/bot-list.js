const {MessageEmbed } = require("discord.js")
const config = require('../config.js');

class commandbot {
    constructor() {
        this.name = "bots-list"
        this.description = "Liste les bots du serveur"
        
    }

    async execute(interaction, client ) {
        
        let members = interaction.guild.members.cache.filter(u => u.user.bot).map((u) => `${u.user.tag} (\`${u.id}\`)`)
        const total_members = members.length
        members = total_members > 20 ? members.slice(0, 20).join("\n") : members.join("\n")
        if(members.length <= 0) {
            members = "Aucun bot"
        }

        const embed = new MessageEmbed()

        .setAuthor(`Bots found!`, `${client.user.displayAvatarURL()}`)
        .setDescription(`Il y a **${total_members}** bots dans **${interaction.guild.name}**`)
        .addFields({name: "__**Bots**__", value: `${total_members > 20 ? `${members} et ${total_members - 20} de plus` : members}`})
        .setColor("#ff0000")
        .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
        .setTimestamp()

        return interaction.reply({embeds: [embed]})
        
        
          
    }
}

module.exports = commandbot
