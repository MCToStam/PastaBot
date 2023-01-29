const { MessageEmbed, PermissionBitField } = require('discord.js');
const config = require ('../config.js')
class commandmp {
    constructor() {
        this.name = "dm"
        this.description = "Envoie un message privé à quelqu'un"
        this.options = [
            { type: 'USER', name: "account", description: "Personne à qui vous voulez envoyer le message", required: true },
            { type: 'STRING', name: "msg", description: "Votre message", required: true },

        ]
    }

    async execute(interaction, client) {
       
            const error = new MessageEmbed()
            .setTitle(':x: Erreur')
            .setDescription(`Vous n'avez pas les permissions requies pour faire ceci`)
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()
        
        if(interaction.member.id == config.devid){
            
        const msg = interaction.options.getString("msg")
        const account = interaction.options.getUser("account")
        
        const embed = new MessageEmbed()
				.setColor("#ff00b2")
				.setTitle(`Système de message privé`)
				.setThumbnail(`https://play-lh.googleusercontent.com/OY4rxeNTPaHwyOTZ-RUooqJvPnO5QUYmQcw0dhD90Mu6UWItOSZfQv7ks_FscbBow0M`)
				.addFields(
                    { name:'Envoyé par', value: `<@${interaction.user.id}>`},
					{ name:'Message :\nㅤ', value: `- \`${msg}\``},
					);
        const embeda = new MessageEmbed()
                    .setColor("36393E")
                    .setTimestamp()
                    .setTitle(`Logs`)
                    .addFields(
                        { name:'Envoyé par', value: `<@${interaction.user.id}>`},
                        { name:'Envoyé à', value: `${account}`},
                        { name:'Message :', value: `\`${msg}\``},
                        );
                        const embedv = new MessageEmbed()
                        .setColor("36393E")
                        .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
         			    .setTimestamp()
                        .setTitle(`Système de message privé`)
                        .setDescription('Ton message a belle et bien été envoyé')
                    

			 account.send({ embeds: [embed]});
             interaction.reply({embeds: [embedv]})
             client.channels.cache.get('741960795071709216').send({embeds: [embeda]});
            }
        else{
            interaction.reply({embeds: [error]});
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
              };
 	 	  };
    };

module.exports = commandmp;

