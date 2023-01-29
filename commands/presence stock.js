const {MessageEmbed, User } = require('discord.js');
const config = require('../config.js');

class commandstatus_stock {
    constructor() {
        this.name = "status-reset"
        this.description = "Reset le status de PastaBot"
    }

    async execute(interaction, client) {

        const embedfail = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("⚠️ㅤStatusㅤ⚠️")
        .setDescription(`Oups ! Vous ne pouvez pas effectuer cette commande !`)
        .setFooter({text: `${config.bote}`})

        if(interaction.member.id == config.devid){

            client.user.setPresence({ activities: [{ name: `PastaBot | X commandes` }], status: 'WATCHING' });
            const embedok = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("⚠️ㅤStatusㅤ⚠️")
        .setDescription(`\`${client.user.tag}\` **Le status à bien été reset !**`)
        .setFooter({text: `${config.bote}`})
            interaction.reply({embeds: [embedok]})

            }
            else{
                interaction.reply({embeds: [embedfail]})
            }
        }   
    }

module.exports = commandstatus_stock