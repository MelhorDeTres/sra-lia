const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const commandsController = require('./commandsController');

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} Membros MD3`);
    client.user.setActivity(`Estou disponível para ${client.users.size} players.`);
});

client.on("guildCreate", guild => {
    console.log(`O Bot acabou logar no Servidor`);
});

client.on("message", async message => {
    commandsController.botCommands(message);
});

client.on("guildMemberAdd", async member => {
    commandsController.dicasBemVindo(member);
    client.user.setGame(`Estou disponível para ${client.users.size} players.`);
});

client.on("raw", async dados => {
    // REMOVA O COMENTARIO DA LINHA ABAIXO PARA FAZER O TESTE:
    // console.log('Esse "raw" captura tudo dentro do Servidor');

    // Os dados seguem no seguinte formato:
    /*
        {
            t: TIPO DE AÇÃO REALIZADA NO SERVIDOR
            s: SEQUENCIA DO EVENTO, ID
            op: OPCODE, ESTILO STATUS RESPONSE
            d: DADO/CONTEÚDO DA AÇÃO REALIZADA
        }
    */
})

client.login(config.token);
