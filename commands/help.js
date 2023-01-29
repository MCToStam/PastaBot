const {MessageActionRow, MessageButton, MessageEmbed} = require ('discord.js')
const config = require ('../config.js')
const fs = require('fs');

class commandhelp {
    constructor() {
        this.name = "help"
        this.description = "Affiche la commande d'aide"
    }

    async execute(interaction) {

        const commands = fs.readdirSync('./commands/');
        const com = commands.map(file => file.replace(".js", ""))
        
        const embed = new MessageEmbed()
                .setDescription(`__**Help Pages**__`)
                .addFields(
                    { name: "How To See Other Pages", value: `You just have to click on the buttons below`},
                    { name: "Chapters", value: '- First page : Commands \n - Second Page : Version\n - Third Page : Faox Mod\n - Fourth Page : Faox Support Server\n - Fifth Page : Support Us'}
                    )
                .setColor(`#001aff"`)

                const embed1 = new MessageEmbed()
                .setTitle(`__**Commands**__`)
                .setDescription(`\`${com.join(', ')}\``)
                .setColor(`#2F3136"`)
                .setTimestamp()
                .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
                .setTimestamp()

                const embed2 = new MessageEmbed()
                .setTitle(`⛔ㅤFailㅤ⛔`)
                .setDescription(`This page does't exist\n Retry please !`)
                .setColor('RED')
                .setTimestamp()
                .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
                .setTimestamp()

                const embed3 = new MessageEmbed()
                .setTitle(`__**Version**__`)
                .setDescription(`I'm always in developpement but my creator decided to give me a version`)
                .addField("ㅤ", `\`\`Version: ${config.version} \`\``, true)
                .setColor('GREEN')
                .setTimestamp()
                .setFooter({ text: config.bote , iconURL: config.logo })
                const embed4 = new MessageEmbed()
                .setTitle(`__**Faox Mod**__`)
                .setDescription(`Faox Mod is the other Faox Bot, it has powerful features like: Nuke system, mute system, etc ...`)
                .addField("How to invite him", `\`\`Just by clicking on the Invite Faox Mod button\`\``, true)
                .setColor('#ec9c9c')
                .setTimestamp()
                .setFooter({ text: config.bote , iconURL: config.logo })  
                const embed5 = new MessageEmbed()
                .setTitle(`__**Faox Support Server**__`)
                .setDescription(`Faox Bots has a dedicated server for help you if you have some troubles`)
                .addField("How To Join the __Server__", `\`\`Just by clicking on the Faox Support Server button\`\``, true)
                .setColor('#ec9c9c')
                .setTimestamp()
                .setFooter({ text: config.bote , iconURL: config.logo })
                const embed6 = new MessageEmbed()
                .setTitle(`__**Support Us**__`)
                .setDescription(`Faox Dev Team Has made Faox Bots for free ! `)
                .addField("If you want to support Faox Dev Team", `\`\`You can just click on the button, watch ads and it's done\`\``, true)
                .setColor('PURPLE')
                .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
                .setTimestamp()  

                // premiere
                const a = new MessageButton()
                .setCustomId("b")
                .setEmoji('⛔')
                .setStyle('SECONDARY')
                .setDisabled(true)

                const b = new MessageButton()
                .setCustomId('a')
                .setEmoji('↪')
                .setStyle('SECONDARY')

                var row = new MessageActionRow()
                .addComponents(a, b)

                const invite = new MessageButton()
                .setStyle("LINK")
				.setLabel('Invite Faox Mod')
				.setURL(`https://urlz.fr/iXuU`);

                var invited = new MessageActionRow()
                .addComponents(invite)

                const server = new MessageButton()
                .setStyle("LINK")
				.setLabel('Faox Support Server')
				.setURL(`https://discord.gg/uYFdmN96bB`);

                var serverd = new MessageActionRow()
                .addComponents(server)

                const support = new MessageButton()
                .setStyle("LINK")
                .setLabel('Support Us')
                .setURL('https://dausel.co/WwKW34')

                var supportd = new MessageActionRow()
                .addComponents(support)

        interaction.reply({embeds: [embed], components: [row], fetchReply: true}).then(msg => {
    }
    );
                const c = new MessageButton()
                .setCustomId("c")
                .setEmoji('↪')
                .setStyle('SECONDARY')

                const d = new MessageButton()
                .setCustomId('d')
                .setEmoji('↩')
                .setStyle('SECONDARY')

                var row2 = new MessageActionRow()
                .addComponents(d, c)

                const e = new MessageButton()
                .setCustomId("e")
                .setEmoji('↩')
                .setStyle('SECONDARY')

                const f = new MessageButton()
                .setCustomId('f')
                .setEmoji('↪')
                .setStyle('SECONDARY')

                var row3 = new MessageActionRow()
                .addComponents(e, f)

                const g = new MessageButton()
                .setCustomId("g")
                .setEmoji('↩')
                .setStyle('SECONDARY')

                const h = new MessageButton()
                .setCustomId('h')
                .setEmoji('↪')
                .setStyle('SECONDARY')

                var row4 = new MessageActionRow()
                .addComponents(g, h)

                const i = new MessageButton()
                .setCustomId("i")
                .setEmoji('↩')
                .setStyle('SECONDARY')

                const j = new MessageButton()
                .setCustomId('j')
                .setEmoji('↪')
                .setStyle('SECONDARY')

                var row5 = new MessageActionRow()
                .addComponents(i, j)

                const k = new MessageButton()
                .setCustomId("k")
                .setEmoji('↩')
                .setStyle('SECONDARY')

                const l = new MessageButton()
                .setCustomId('l')
                .setEmoji('⛔')
                .setStyle('SECONDARY')
                .setDisabled(true)

                var row6 = new MessageActionRow()
                .addComponents(k, l)

                const filter = (i) => i.user.id === interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60_000 });
                collector.on("collect", (i) => {
                  switch (i.customId) {
                    case "a": {
                      
                        i.update({embeds: [embed1], components: [row2]})
                        //embed commandes
                      break;
                    }
                    case "b": {

                        
                        i.update({embeds: [], components: []})
                        //embed fail

                    }
                    case "c": {

                        i.update({embeds: [embed3], components: [row3]})
                        //embed version

                    }
                    case "d": {

                        i.update({embeds: [embed], components: [row]})

                    }
                    case "e": {

                        i.update({embeds: [embed1], components: [row2]})
                    }
                    case "f": {

                        i.update({embeds: [embed4], components: [row4, invited]})
                        }
                    case "g": {

                        i.update({embeds: [embed3], components: [row3]})
                    }
                    case "h": {

                        i.update({embeds: [embed5], components: [row5, serverd]})
                    }
                    case "i": {

                        i.update({embeds: [embed4], components: [row4, invited]})
                    }
                    case "j": {

                        i.update({embeds: [embed6], components: [row6, supportd]})
                    }
                    case "k": {

                        i.update({embeds: [embed5], components: [row5, serverd]})
                    }
                    case "l": {

                        i.update({embeds: [embed2], components: []})
                    }

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
                })
    }
}




module.exports = commandhelp