const Discord = require("discord.js")
const anti = require("../anticrash.js")
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require("../config");

const statuses = {
    online: "🟢ㅤEn ligne",
    offline: "⚪ㅤHors ligne",
    dnd: "🔴ㅤNe pas déranger",
    idle: "🟡ㅤOccupé",
  };

class commanduserinfo {
    constructor() {
        this.name = "userinfo"
        this.description = "Information sur une personne"
        this.options = [
            { type: 'USER', name: "personne", description: "La personne auquel vous voulez savoir des informations", required: true },
        ]
    }

    async execute(interaction) {
        const account = interaction.options.getUser("personne")
        const aid = interaction.guild.members.cache.get(account.id);
    try{
        let rolenames;
        let roles = aid.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);

            rolenames = roles.join(" ")
            if(aid.roles.cache.size < 1) rolenames = "Aucun rôles";

            let status = aid?.presence?.status;
            status = statuses[status] ?? statuses["offline"];

            const button3 = new MessageActionRow()
				.addComponents(new MessageButton()
				.setStyle("LINK")
				.setLabel(`Avatar de ${account.username}`)
				.setURL(`${account.displayAvatarURL({ dynamic: true, size: 4096 })}`));
    

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('👥 Informationㅤ👥')
            .addFields(
               { name: '🏷️ㅤPseudo ', value: `${account.username}`, inline: false },
               { name: '🆔ㅤID', value: ` ${account.id}`, inline: false },
               { name: '📆ㅤDate de création', value: `${account.createdAt.toLocaleDateString('en-GB')}`, inline: false },
               { name: '➡️ㅤRôles', value: rolenames},
               { name: '🌐ㅤStatus', value: `${status}`},
            )
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()

        interaction.reply({ embeds: [embed], components: [button3] });

    } 
    catch (error) {
        const embed2 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Youtube Failure')
        .setDescription(`Sorry But The **${error.message}**`)
        .setFooter({ text: config.bote , iconURL: config.logo })
        .setTimestamp()
        interaction.reply({ embeds: [embed2]})
        console.log(error)
    }

    if(config.anticrash) {
        process.on('unhandledRejection', (reason, p) => {
          console.log(' [antiCrash] :: Unhandled Rejection/Catch');
          console.log(reason, p);
      });
      process.on("uncaughtException", (err, origin) => {
          console.log(' [antiCrash] :: Uncaught Exception/Catch');
          console.log(err, origin);
      }) 
      process.on('uncaughtExceptionMonitor', (err, origin) => {
          console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
          console.log(err, origin);
      });
      process.on('multipleResolves', (type, promise, reason) => {
          console.log(' [antiCrash] :: Multiple Resolves');
          console.log(type, promise, reason);
      });
      }
}
}

module.exports = commanduserinfo

