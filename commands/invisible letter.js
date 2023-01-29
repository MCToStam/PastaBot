class commandletter {
    constructor() {
        this.name = "letter"
        this.description = "Don't use this "
        
    }

    async execute(interaction) {
        
		interaction.reply({ content: 'The letter is here: .|ㅤ|.' });
        
    }
}

module.exports = commandletter