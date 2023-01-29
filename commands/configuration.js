const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()
class commandconfig {
    constructor() {
        this.name = "configuration"
        this.description = "Moderation configuration."
        this.options = [
            { type: 'STRING', name: "set", description: "Type", required: false },
            { type: 'STRING', name: "to", description: "true/false", required: false }
        ]
    }

    async execute(interaction) {
        const set = interaction.options.getString("set")
        const to = interaction.options.getString("to")
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: `You don't have the permission \`ADMINISTRATOR\` to do this command.`, ephemeral: true});

        if(set) {
            if(set != "anti-link") return interaction.reply({content: "You must specify a valid value for 'set' (anti-link...) !"})
            if(!to) return interaction.reply({content: "You must specify a value for 'to' (true or false) !"})
            if(to !== "false" && to !== "true") return interaction.reply({content: "You must specify a valid value for 'to' (true or false) (make sure its on lower caracthers)!"})
            

            await db.set(`${interaction.guild.id}`, { anti_link: `${to}` }).then(() => {
                console.log("ok")
            })

        }

        
        let AntiLink = await db.get(`${interaction.guild.id}.anti_link`).catch((err) => {
            AntiLink = false
            throw err;
        })


        const embed = new Discord.MessageEmbed()
            .setDescription("**AntiLink**: `"+AntiLink+"`\n\nIf you want to change that, use the command: `/configuration set:anti-link to:true/false`")
            .setColor("AQUA")

        interaction.reply({embeds: [embed]})

    }
}

module.exports = commandconfig