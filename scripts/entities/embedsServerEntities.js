module.exports = {
    dicasSemCargo,
    confirmNewMember,
    agoraEhPlayer,
    agoraEhMod,
    agoraEhMidia,
    agoraEhDev
};

/* Embeds relacionados a Confirmação de novos Cargos e Nomes */

async function dicasSemCargo(message) {
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
        "name": `Olá, seja bem-vindo a MD3, a Melhor Comunidade Gamer.`,
        "icon_url": "https://imgur.com/Jr3fWGy.jpg"
      },
      "fields": [
        {
          "name": "Para acesso interno utilize o comando:",
          "value": '```Bot registrar```'
        }
      ]
    };

    await message.author.send({embed});
}

async function confirmNewMember(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}, agora, é MD3`,
    "url": `${dadosUser.urls.urlSteam}`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `Bem-vindo(a)!`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil Steam, digite:",
        "value": "```Bot perfil```"
      },
      {
        "name": "Para exibir outras funções do Bot, digite:",
        "value": "```Bot comandos```"
      }
      ]
  };

  await message.channel.send({ embed });
}

async function agoraEhPlayer(message, user) {
    let dadosUser = {
        nick: user.user.username,
        urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
        avatar: user.user.displayAvatarURL
        }
    let embed = {
        "title": `${dadosUser.nick}, o novo Player MD3`,
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
          "name": `${message.author.username} tornou:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
            {
              "name": "Agora você tem acesso a Salas Privadas como as",
              "value": "```LineVIP #1 e LineVIP #2```"
            },
            {
              "name": "Para mais informações sobre o Cargo:",
              "value": "```Consulte algum MOD (@Staff)```"
            }
          ]
      };
    await message.channel.send({ embed });
}

async function agoraEhMod(message, user) {
    let dadosUser = {
        nick: user.user.username,
        urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
        avatar: user.user.displayAvatarURL
        }
    let embed = {
        "title": `${dadosUser.nick}, o novo Moderador MD3`,
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
          "name": `${message.author.username} tornou:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
            {
              "name": "Agora você tem acesso a Categorias Privadas como o",
              "value": "```Escritórios MD3```"
            },
            {
              "name": "Para mais informações sobre o Cargo:",
              "value": "```Consulte algum MOD (@Staff)```"
            }
          ]
      };
    await message.channel.send({ embed });
}

async function agoraEhMidia(message, user) {
    let dadosUser = {
        nick: user.user.username,
        urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
        avatar: user.user.displayAvatarURL
        }
    let embed = {
        "title": `${dadosUser.nick}, o novo acessor de Mídia MD3`,
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
          "name": `${message.author.username} tornou:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
            {
              "name": "Agora você tem acesso a Categorias Privadas como o",
              "value": "```Escritórios MD3```"
            },
            {
              "name": "Para mais informações sobre o Cargo:",
              "value": "```Consulte algum MOD (@Staff)```"
            }
          ]
      };
    await message.channel.send({ embed });
}

async function agoraEhDev(message, user) {
  let dadosUser = {
        nick: user.user.username,
        urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
        avatar: user.user.displayAvatarURL
        }
    let embed = {
        "title": `${dadosUser.nick}, o novo Desenvolvedor MD3`,
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
          "name": `${message.author.username} tornou:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
            {
              "name": "Agora você tem acesso a Categorias Privadas como o",
              "value": "```Escritórios MD3```"
            },
            {
              "name": "Para mais informações sobre o Cargo:",
              "value": "```Consulte algum MOD (@Staff) ou DEV (@Programador)```"
            }
          ]
      };
  await message.channel.send({ embed });
}