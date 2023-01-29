const Discord = require("discord.js")
const m = require("moment-duration-format");
const {
    version
} = require("discord.js");
const moment = require("moment");
let os = require('os');
const { filledBar } = require('string-progressbar');
const bar = filledBar((os.totalmem() / 1024 / 1024).toFixed(2), (os.freemem() / 1024 / 1024).toFixed(2))[0]
const config = require('../config.js');


class commandbotinfo {
    constructor() {
        this.name = "bot-info"
        this.description = "Affiche les informations du bot"
    }

    async execute(interaction, client, percent) {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setAuthor({name: `${interaction.client.user.username} Informations`})
            .setTitle("__**Stats:**__")
            .addField("Latence", `${(interaction.client.ws.ping)}ms`)
            .addField("`⌚️` Uptime ", `${duration}`, true)
            .addField("`👾` Discord.js", `v${version}`, true)
            .addField("`⚙️` Node", `${process.version}`, true)
            .addField("`🤖` CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("`🤖` CPU Speed", `${os.cpus()[0].speed} MHz`)
            .addField("`⏳` Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("`🎚️` Mem Total", `${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps`, true)
            .addField("`⏱️` Mem Bar", `${(bar)}`)
            .addField("`💻` Platform", `\`\`${os.platform()}\`\``, true)
            .addField("`🤖` Arch", `\`${os.arch()}\``, true)
            .addField("`💻` Machine", `\`${os.homedir}\``, true)
            .addField("🤖 HostName", `\`\`${os.hostname}\`\``, true)
            .addField("🤖 HostName", `\`\`${os.release}\`\``, true)
            .addField("🤖 OS", `\`\`${os.type}\`\``, true)
            .setFooter({ text: `${interaction.member.displayName}` , iconURL: config.logo })
            .setTimestamp()
        await interaction.reply({ embeds: [embed] });
        

    }
}

module.exports = commandbotinfo





