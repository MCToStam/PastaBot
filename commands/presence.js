const {MessageEmbed } = require('discord.js');
const config = require('../config.js');

class commandpresence {
    constructor() {
        this.name = "status"
        this.description = "Change le status de PastaBot"
        this.options = [
            { type: 'STRING', name: "status", description: "Le status à mettre", required: true },
            
        ]
    }

    async execute(interaction, client) {

        const presence = interaction.options.getString('status')

        const embedfail = new MessageEmbed()
            .setColor("ORANGE")
            .setTitle("⚠️ㅤStatusㅤ⚠️")
            .setDescription(`Oups ! Vous ne pouvez pas effectuer cette commande !`)
            .setFooter({text: `${config.bote}`})


        if(interaction.member.id == config.devid){

            client.user.setPresence({ activities: [{ name: `${presence}` }], status: 'WATCHING' });
            const embedok = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("⚠️ㅤStatusㅤ⚠️")
        .setDescription(`\`${client.user.tag}\` **Le status à été changé en** : \n- \`${presence}\``)
        .setFooter({text: `${config.bote}`})
            interaction.reply({embeds: [embedok]})

            }
        else{
            interaction.reply({embeds: [embedfail]});
            }
        }   
    }

module.exports = commandpresence