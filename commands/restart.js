const Discord = require('discord.js');
const {MessageActionRow, MessageButton, MessageEmbed} = require ('discord.js')
const { devid } = require('../config.js')
const config = require ('../config.js')

class commandrestart {
    constructor() {
        this.name = "restart"
        this.description = "restart the bot"
    }

    async execute(interaction, client) {

        if(!interaction.user.id == devid){

            const embed = new MessageEmbed()
            .setTitle('☣️ㅤRestart Systemㅤ☣️')
            .setDescription(`${interaction.member} Do you really want to restart the system ?!`)
            .addField("Use this command safely", `It's a powerful command`, true)
            .setFooter({ text: config.bote , iconURL: config.logo })
            
            interaction.reply({ embeds: [embed]})
        }
        if(interaction.user.id == devid){
        
        const embed = new MessageEmbed()
            .setTitle('☣️ㅤRestart Systemㅤ☣️')
            .setDescription(`<@${interaction.user.id}> Do you really want to restart the system ?!`)
            .addField("Use this command safely", `It's a powerful command`, true)
            .setFooter({ text: config.bote , iconURL: config.logo })
        
        const embed2 = new MessageEmbed()
            .setTitle('☣️ㅤRestart Systemㅤ☣️')
            .setDescription(`The bot is restarting`)
            .setFooter({ text: config.bote , iconURL: config.logo })    

            const embed3 = new MessageEmbed()
            .setTitle('☣️ㅤRestart Systemㅤ☣️')
            .setDescription(`Succesfully restart ${client.user.tag}`)
            .setFooter({ text: config.bote , iconURL: config.logo })

            const embed4 = new MessageEmbed()
            .setTitle('☣️ㅤRestart Systemㅤ☣️')
            .setDescription(`System is not restarting \n You choosed to not restart ${client.user.tag}`)
            .setFooter({ text: config.bote , iconURL: config.logo })

       const yes = new MessageButton()
            .setCustomId("yes")
            .setLabel('Yes')
            .setEmoji('✅')
            .setStyle('DANGER')
        
        const no = new MessageButton()
            .setCustomId("no")
            .setEmoji('❌')
            .setLabel('No')
            .setStyle('SUCCESS')
        
        var row = new MessageActionRow()
            .addComponents(yes, no)

            interaction.channel.send({embeds: [embed], components: [row]});

            const filter = (i) => i.user.id === interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60_000 });
                collector.on("collect", (i) => {
                  switch (i.customId) {
                    case "yes": {
                      
                        
                        client.destroy()
                        i.update({embeds: [embed3], components: []})
                        client.login(config.token2)
                        client.user.setPresence({ activities: [{ name: '/help | Faox Fun ... The BIG foxes King' }], status: 'WATCHING' });

                      break;
                    }
                    case "no": {

                        
                        i.update({embeds: [embed4], components: []})

                    }
        }
    }
)
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

module.exports = commandrestart ;
