const config = require('../config.js');
class command {
    constructor() {
        this.name = "embed"
        this.description = "Créer un embed"
        this.options = [
            { type: 7, name: "channel", description: "Le salon ou le bot va publier l'embed", required: false },
            { type: 3, name: "title", description: "Le titre de l'embed", required: false },
            { type: 3, name: "description", description: "La description de l'embed", required: false },
            { type: 3, name: "field", description: "add a field.", required: false },
            { type: 3, name: "field2", description: "add a field.", required: false },
            { type: 3, name: "field3", description: "add a field.", required: false },
            { type: 3, name: "field4", description: "add a field.", required: false },
            { type: 3, name: "image", description: "L'image de de l'embed", required: false },
            { type: 3, name: "author", description: "L'auteur de de l'embed", required: false },
            { type: 3, name: "url", description: "L'URL de l'embed", required: false },
            { type: 3, name: "thumbnail", description: "The embed thumbnail.", required: false },
            { type: 3, name: "footer", description: "The embed footer.", required: false },
            { type: 3, name: "footer-image", description: "The embed footer image. Only works if there is already a footer.", required: false },
            { type: 3, name: "color", description: "La couleur de l'embed", required: false }
        ]
    }

    async execute(interaction, client) {
        const config = require("../config.js")
        const channel = interaction.options.getChannel("channel")
        const title = interaction.options.getString("title")
        const field = interaction.options.getString("field")
        const field2 = interaction.options.getString("field2")
        const field3 = interaction.options.getString("field3")
        const field4 = interaction.options.getString("field4")
        const description = interaction.options.getString("description")
        const image = interaction.options.getString("image")
        const color = interaction.options.getString("color")
        const author = interaction.options.getString("author")
        const url = interaction.options.getString("url")
        const thumbnail = interaction.options.getString("thumbnail")
        const footer = interaction.options.getString("footer")
        const footerImage = interaction.options.getString("footer-image")

        if(channel && (channel.type !== "GUILD_TEXT")) return interaction.reply({ content: "The channel must be a text channel.", ephemeral: true })

        try {
            const embeds = [{
                title: title,
                description: description ?? "** **",
                image: { url: image },
                color: color,
                author: { name: author, url: url },
                thumbnail: { url: thumbnail },
                footer: { text: footer, iconURL: footerImage }
            }]
            interaction.reply({ content: "Done!", ephemeral: true })
            if(channel) {
                channel.send({
                    embeds: embeds
                })
            } else {
                interaction.channel.send({
                    embeds: embeds
                })
            }
        } catch(e) {
            interaction.reply("An error has occurred while sending the embed.")
        }
    
        
    }
}

module.exports = command