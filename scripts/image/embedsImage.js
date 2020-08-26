module.exports = {
    dicaCriacaoDeImagens
}

async function dicaCriacaoDeImagens(message) {
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
          "name": `Lista de Criações, disponíveis, do Servidor:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
          {
            "name": "Criar foto de Perfil Steam, com Logo MD3:",
            "value": '`Bot foto steam`'
          },
          {
            "name": "Criar foto MD3 Azul/Amarela/Rosa/Verde/Laranja:",
            "value": '`Bot foto cor`'
          },
          {
            "name": "Criar foto da Logo MD3:",
            "value": '`Bot foto md3`'
          },
          {
            "name": "Digite no Chat, algo como:",
            "value": "`Bot comando complemento-se-necessario`"
          }
        ]
      };

      await message.author.send({embed});
}