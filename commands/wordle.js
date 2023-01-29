const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


class commandgame {
    constructor() {
        this.name = "wordle"
        this.description = "Mini jeux, essaie de trouver le bon mot"
        
    }

    async execute(interaction) {
        
        let errEmbed = new MessageEmbed()
.setColor("#6F8FAF")

const gamedesc = [
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`,
`⬛⬛⬛⬛⬛ - Empty`
]

let game = new MessageEmbed()
.setTitle(`| Wordle`)
.setDescription(gamedesc.join('\n'))
.setFooter({ text: `Tu as 7 tentatives pour trouver le bon mot`})
.setColor("#6F8FAF")
  
interaction.reply({ embeds: [game]})
  
let options = {
yellow: `🟨`,
grey: `⬜`,
green: `🟩`,
black: `⬛`,
}

var tries = 0;
let words = ["books","apple","color","ready","house","table","light","sugar","eager","elite","plant","stamp","spawn", "timer","hoods","hello","food","laugh","uplay","garden","chair","tanks","hairs","beans","drive","water","later","notes","micro","stars","grade"]
let solution = words[Math.floor(Math.random() * words.length)];

let lala = new MessageEmbed()
.setTitle(`Liste de mot`)
.setDescription(`Le mot que tu doit trouver est dans cette liste :`)
.addField("Trouve le bon mot ! ", `\`\`${words}\`\``, true)
interaction.channel.send({ embeds: [lala]});


const filter = m => m.author.id === interaction.user.id;
const msgCollector = interaction.channel.createMessageCollector({ filter, time: 50000});

msgCollector.on('collect', async m => {
if(m.author.bot)return
let guess = m.content.toLowerCase();
if(guess.length > 5 || guess.length < 5)return;
var result = "";
for (let i = 0; i < guess.length; i++) {
let guessLetter = guess.charAt(i);
let solutionLetter = solution.charAt(i);
if (guessLetter === solutionLetter) {
result = result.concat(options.green)
}
else if (solution.indexOf(guessLetter) != -1) {
result = result.concat(options.yellow)
}
else {
result = result.concat(options.grey)
}
}
if(result === "🟩🟩🟩🟩🟩"){
gamedesc[tries] = `${result} - ${guess}`;
interaction.editReply({ embeds: [game.setDescription(gamedesc.join('\n'))]})
interaction.editReply({ embeds: [game.setFooter({ text: `Tu as trouvé le bon mot !`})]})
return msgCollector.stop();
}else{
msgCollector.resetTimer();
gamedesc[tries] = `${result} - ${guess}`;
interaction.editReply({ embeds: [game.setDescription(gamedesc.join('\n'))]})
tries += 1
if(tries === 7){
interaction.editReply({ embeds: [game.setFooter({ text: `Tu as utilisé tes 7 tentavies, le mot était ${solution}`})]})
return msgCollector.stop();
}
}
});
        
    }
}

module.exports = commandgame


