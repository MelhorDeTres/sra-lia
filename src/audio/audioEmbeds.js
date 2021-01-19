module.exports = {
    dicaAudio,
    musicCommands
}

async function dicaAudio(message) {
    let dicaAudio = '\n:pencil: Estes são os comandos de áudio disponíveis no servidor. Entre em um canal de voz para usar:\n```' +
        'Bot play <URL> (para tocar áudio)\n' +
        '\n' +
        'Ex: Bot play https://youtube.com/... \n' +
        '\n' +
        'Bot pause (para pausar o áudio)\n' +
        'Bot resume (para resumir o áudio)\n' +
		'Bot skip (para avançar um áudio na fila)\n' +
		'Bot stop (para interromper toda a fila)```'
	await message.reply(dicaAudio);
}

async function musicCommands(message) {
    let dadosUser = {
      nick: message.author.username,
      urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
      avatar: message.author.displayAvatarURL
      }
    let embed = {
      "title": `${dadosUser.nick}`,
      "url": `${dadosUser.urlSteam}`,
      "color": 128994,
      "footer": {
        "icon_url": "https://imgur.com/sSIyIte.png",
        "text": "Melhor de todas, Melhor de Três"
      },
      "thumbnail": {
        "url": `${dadosUser.avatar}`
      },
      "author": {
        "name": `Lista de Comandos, disponíveis, de Música:`,
        "icon_url": "https://imgur.com/Jr3fWGy.jpg"
      },
      "fields": [
        {
          "name": "Adicionar música na lista (Canal de Voz):",
          "value": '`Bot play urlMusica`'
        },
        {
          "name": "Pular para a próxima música da lista:",
          "value": '`Bot skip`'
        },
        {
          "name": "Pausar música atual:",
          "value": '`Bot pause`'
        },
        {
          "name": "Despausar música atual:",
          "value": '`Bot resume`'
        },
        {
          "name": "Remover Bot do Canal de Voz:",
          "value": '`Bot stop`'
        },
        {
          "name": "Digite no Chat, algo como:",
          "value": "`Bot comando complemento-se-necessario`"
        }
      ]
    };
  
    await message.author.send({embed});
    // await message.channel.send({ embed });
}