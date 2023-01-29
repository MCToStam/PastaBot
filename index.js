const Discord = require("discord.js")
const { readdirSync } = require("fs")
const {MessageEmbed,} = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'DIRECT_MESSAGES', 'GUILD_PRESENCES', 'GUILD_BANS'], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const config = require("./config");
const commands = new Discord.Collection()

const files = readdirSync("./commands")
const filesName = files.map(file => file.replace(".js",""))
for(const fileName of filesName) {
    const command = require(`./commands/${fileName}`)
    const data = new command()
    commands.set(data.name, data)
}

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim()
    if(x === "c!serverlist") {
        const Guilds2 = client.guilds.cache.map(guild => guild.name);
        console.log("-------------------------")
        console.log(`${Guilds2.join(',\n')}`)
        console.log("-------------------------")
    } else if(x === "c!stats") {
        console.log("-------------------------")
        console.log(`ㅤ${client.guilds.cache.size} serveur,`)
        console.log("-------------------------")
        console.log(`ㅤ${client.channels.cache.size} channels,`)
        console.log("-------------------------")
        console.log(`ㅤ${client.users.cache.size} users !`)
        console.log("-------------------------")
    }
});

let couleurs = ['#2F3136','#0800ff','#00ff00','#ec9c9c','#ff0000']

        let couleurss = couleurs[Math.floor(Math.random() * couleurs.length)];

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.name + ":ㅤ" + guild.id);
    client.application.commands.set(commands.map(({ execute, ...data }) => data))
    console.log("-------------------------")
    console.log(client.user.tag)
    console.log("-------------------------")
    console.log("Servers Names + IDs")
    console.log(Guilds);
    console.log("-------------------------")
    console.log("Console Designed By Fazen")
    console.log("-------------------------")
    console.log(`Je suis dans ${client.guilds.cache.size} serveur,`)
    console.log("-------------------------")
    console.log(`Je suis dans ${client.channels.cache.size} channels,`)
    console.log("-------------------------")
    console.log(`Avec ${client.users.cache.size} users !`)
    console.log("-------------------------")
    console.log(`Commandes ${filesName} Correctement Chargées`)
    console.log("-------------------------")
    console.log(`${client.user.tag} Est Maintenant Online`)
    console.log("-------------------------")

    const embed = new MessageEmbed()
    .setColor('#d352ff')
    .setTitle(`${client.user.tag}`)
    .setDescription(`\`\`The Bot is now starting\`\``)
    .addFields(
        {name: `Commands\nㅤ`, value: `- ${filesName.join("\n- ")} \n\n**Loaded and Ready to use**\nㅤ`},
        {name: `${client.user.tag}\nㅤ`, value: `**Is Now Running**`}
    )

client.channels.cache.find(i => i.name === 'log').send({embeds: [embed]});
//const account = config.devid
//account.send({embeds: [embed]})
client.user.setPresence({ activities: [{ name: 'PastaPvP V3 | X commandes effectués' }], status: 'WATCHING' });

})

client.on("interactionCreate", (interaction) => {
    if(!interaction.isCommand()) return
    if(!commands.has(interaction.commandName)) return
    try {
        commands.get(interaction.commandName).execute(interaction, client)
    } catch (error) {
        console.error(error)
    }
})

client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('<@1006989851960279201>')) {

    const embedz = new MessageEmbed()
    .setColor("#2F3136")
    .setTitle(`${client.user.tag}`)
    .setDescription(`\`\`Faox Fun Informations\`\``)
    .addFields(
        {name: 'Faox Fun uses / commands', value: `This bot uses only / commands in general !`},
        {name: `Commands\nㅤ`, value: `- \`${filesName.join(" |- ")}\` \n\n**Here's Faox Fun Commands**\nㅤ`},

    )
   message.reply({embeds: [embedz]});
   const embeda = new MessageEmbed()
                    .setColor('#d352ff')
                    .setTimestamp()
                    .setTitle(`System Logger`)
                    .addFields(
                        { name:'Command Used', value: `\`Faox Fun Informations Via Faox Fun mention\``},
                        { name:'Server', value: `\`${message.guild}\` \n\n If null = Command used in DM`},
                        );
                    

             client.channels.cache.get('1051221773368184963').send({embeds: [embeda]});
        }
        if(message.author.bot) return;
    if(message.content.toLowerCase().includes('iytfeugoshpqugzvofepsùqfjh^seùiqodejqui*poihiùsqe^z$çp*uohiùgsûiqbhmfvihoug^siqbjzùifhgu^bzifuh$ouq')) {
        if(message.member.permissions.has("ADMINISTRATOR")) return
        if(!message.member.permissions.has("ADMINISTRATOR")){

        
        const embedlink= new MessageEmbed()
            .setColor("#2F3136")
            .setTitle(`⛔ㅤAnti Link Systemㅤ⛔`)
            .setDescription(`\`\`Link are disabled\`\` \n<@${message.member.id}>`)

         message.channel.send({embeds: [embedlink]});
         message.delete()

         const embeda = new MessageEmbed()
         .setColor('#d352ff')
         .setTimestamp()
         .setTitle(`System Logger`)
         .addFields(
             { name:'Command Used', value: `\`Anti Link System\``},
             { name:'Server', value: `\`${message.guild}\` \n\n If null = Command used in DM`},
             );
         

  client.channels.cache.get('1051221773368184963').send({embeds: [embeda]});
  }
}
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
);

client.on("interactionCreate", (interaction) => {
    if(!interaction.isCommand()) return
    if(!commands.has(interaction.commandName)) return
    client.application.commands.set(commands.map(({ execute, ...data }) => data))
    const Guilds = client.guilds.cache.map(guild => guild.name + ":ㅤ" + guild.id);
    try {
        const embeda = new MessageEmbed()
                    .setColor('#d352ff')
                    .setTimestamp()
                    .setTitle(`System Logger`)
                    .addFields(
                        { name:'Command Name', value: `\`${interaction.commandName}\``},
                        { name:'User Name', value: `<@${interaction.user.id}>`},
                        { name:'Server', value: `\`${interaction.guild}\` \n\n If null = Command used in DM`},
                        );

             client.channels.cache.get('1051221773368184963').send({embeds: [embeda]});

    } catch (error) {
        console.error(error)
    }
})

const { QuickDB } = require("quick.db");
const { isApplicationCommandGuildInteraction } = require("discord-api-types/utils/v9");
const db = new QuickDB()

client.on("messageCreate", async (message) => {

        let AntiLink = await db.get(`${message.guild.id}.anti_link`).catch((err) => {
            console.log(err)
        })

        if(AntiLink === "true") {
        if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("www.")) {
            if(message.member.permissions.has("ADMINISTRATOR")) return
            const embed = new MessageEmbed()
                .setDescription("You can't send links bro !")
            message.delete()
            message.channel.send({embeds: [embed]})
        }
    }
});

client.login(config.token2)
