const {MessageEmbed} = require('discord.js')
const config = require('../config.js')
class commandsi {
    constructor() {
        this.name = "server-info"
        this.description = "Infromation sur le serveur"
    }

    async execute(interaction, client) {
        let rolemap = interaction.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(", ");
            if (rolemap.length > 1024) rolemap = "Trop de rôles à afficher";
            if (!rolemap) rolemap = "Aucun rôle";
        let embed = new MessageEmbed()
            .setColor('#d352ff')
            .setTitle("Information")
            .addFields(
                { name: "🏷️ㅤNom", value: "**" + interaction.guild.name + "**", inline: false },
                { name: '🆔ㅤID', value: `${interaction.guild.id}`},
                { name: '💜ㅤBoosts', value: `**${interaction.guild.premiumSubscriptionCount}** boost`},
                { name: '👑ㅤFondateur', value: "<@" + interaction.guild.ownerId + ">", inline: false },
                { name: '📊ㅤMembres', value: `${interaction.guild.memberCount} members`, inline: false },
                { name: '🗒️ㅤRôles', value: ` ${interaction.guild.roles.cache.size} roles`, inline: false },
                { name: '➡️ㅤListe des rôles', value: rolemap, inline: false },
                { name: `💸ㅤNiveau de boost:`, value: `\`\`\`${formatTier(interaction.guild.premiumTier)}\`\`\``},
                { name: '🧑‍💼ㅤServeur partenaire', value:  `\`\`\`${interaction.guild.partnered ? 'Oui' : 'Non'}\`\`\``},
                { name: `🕵️ㅤServeur vérifié`, value: `\`\`\`${interaction.guild.verified ? 'Oui' : 'Non'}\`\`\``},
                { name: '📆ㅤDate de création', value: `${interaction.guild.createdAt.toLocaleDateString()}`, inline: false },
                { name: '🖼️ㅤIcon', value: `[Icon du serveur](${interaction.guild.iconURL({ dynamic: true , size: 2048 , format: "png" })})`, inline: false},)
                
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true , size: 2048 , format: "png" })}`)
            .setFooter({ text: config.bote , iconURL: config.logo })
            .setTimestamp()

        

        function format(str) {
            str = str.replace(/\_/g, " ");
            const split = str.trim().split(" ")
            const splitFixed = [];
            split.forEach((e) => {
                    e = e.charAt(0).toUpperCase() + e.slice(1).toLocaleLowerCase();
                    splitFixed.push(e);
            });
            return splitFixed.join(" ");
    }
    
          function formatTier(tier) {
            if (tier == 'NONE') return 'Level 0 (aucun boost)'
            else if (tier == 'TIER_1') return 'Level 1'
            else if (tier == 'TIER_2') return 'Level 2'
            else if (tier == 'TIER_3') return 'Level 3'
    }
    interaction.reply({ embeds: [embed] });

    

    }
    
}

module.exports = commandsi