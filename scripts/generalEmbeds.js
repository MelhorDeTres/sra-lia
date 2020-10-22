module.exports = {
  dicasBemVindo,
  generalCommands,
  memberCommands,
  botPing,
  printPlataformas
};

async function dicasBemVindo(member) {
  let user = member.user;
  let dadosUser = {
    nick: user.username,
    urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
    avatar: user.displayAvatarURL
  }
  let embed = {
    "title": `${dadosUser.nick}`,
    "url": `${dadosUser.urlSteam}`,
    "color": 128994,
    "description": `Para se registrar, pelo Chat <#709906204146794616>,
    copie o Link de seu perfil Steam e use os comandos a seguir:`,
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
        "name": "Exemplo 1",
        "value": '`Bot registrar https://steamcommunity.com/id/.../`'
      },
      {
        "name": "Exemplo 2",
        "value": '`Bot registrar https://steamcommunity.com/profiles/`'
      }
    ]
  };
  
  await member.send({ embed });
}

async function generalCommands(message) {
    let dadosUser = {
        nick: message.author.username,
        urlSteam: "https://steamcommunity.com/groups/MelhorDeTres",
        avatar: message.author.displayAvatarURL
        }
    let embed = {
        "title": `${dadosUser.nick}`,
        "url": `${dadosUser.urlSteam}`,
        "description": "Utilize o Chat <#709906204146794616>",
        "color": 128994,
        "footer": {
          "icon_url": "https://imgur.com/sSIyIte.png",
          "text": "Melhor de todas, Melhor de Três"
        },
        "thumbnail": {
          "url": `${dadosUser.avatar}`
        },
        "author": {
          "name": `Categorias de Comandos:`,
          "icon_url": "https://imgur.com/Jr3fWGy.jpg"
        },
        "fields": [
          {
            "name": "Registrar seu Perfil Steam, e virar Membro:",
            "value": '`Bot registrar urlSteam`'
          },
          {
            "name": "Visualizar Categorias de Comandos:",
            "value": '`Bot comandos`'
          },
          {
            "name": "Visualizar Lista de Comandos dos Membros:",
            "value": '`Bot membro`'
          },
          {
            "name": "Visualizar Lista de Comandos de Criação de Imagens:",
            "value": '`Bot foto`'
          },
          {
            "name": "Visualizar Lista de Comandos de Música:",
            "value": '`Bot musica`'
          },
          {
            "name": "Digite no Chat, algo como:",
            "value": "`Bot comando complemento_se_necessario`"
          }
        ]
      };
    await message.author.send({embed});
    // await message.channel.send({ embed });
}

async function memberCommands(message) {
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
      "name": `Lista de Comandos, disponíveis, para Membros:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "fields": [
      {
        "name": "Exibir seu Perfil MD3, no Servidor:",
        "value": '`Bot perfil`'
      },
      {
        "name": "Visualizar Latência:",
        "value": '`Bot ping`'
      },
      {
        "name": "Listar as Plataformas de nossa Comunidade:",
        "value": '`Bot plataformas`'
      },
      {
        "name": "Adicionar Cargo a um Usuário:",
        "value": '`Bot adicionar @Cargo @Membro` ou\n`Bot adicionar @Membro @Cargo`'
      },
      {
        "name": "Atualizar seu Nickname, no Servidor:",
        "value": '`Bot nickname novoNickname`'
      },
      {
        "name": "Atualizar seu Perfil Steam, no Servidor:",
        "value": '`Bot steam urlSteam`'
      },
      {
        "name": "Atualizar seu Perfil Twitter, no Servidor:",
        "value": '`Bot twitter urlTwitter`'
      },
      {
        "name": "Atualizar seu Perfil Facebook, no Servidor:",
        "value": '`Bot facebook urlFacebook`'
      },
      {
        "name": "Atualizar seu Perfil Instagram, no Servidor:",
        "value": '`Bot instagram urlInstagram`'
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

async function botPing(message) {
let m = await message.reply("\n:signal_strength: Calculando Ping do Servidor...");
m.edit(`:signal_strength:  A Latência do Bot é de ${m.createdTimestamp - message.createdTimestamp}ms.`);
}

async function printPlataformas(message) {
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
      "name": `Plataformas Melhor de Três:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "fields": [
      {
        "name": "Regras MD3:",
        "value": '[Clique aqui](https://tinyurl.com/SobreMD3)'
      },
      {
        "name": "WhatsApp:",
        "value": '[Clique aqui](https://chat.whatsapp.com/GsCtU9nTVx30pQKvmALEDN)'
      },
      {
        "name": "Discord:",
        "value": '[Clique aqui](https://discord.com/invite/ASwuvJr)'
      },
      {
        "name": "Twitch:",
        "value": '[Clique aqui](https://www.twitch.tv/melhorde3)'
      },
      {
        "name": "Telegram:",
        "value": '[Clique aqui](https://t.me/NotificacoesMD3)'
      },
      {
        "name": "Instagram",
        "value": '[Clique aqui](https://www.instagram.com/melhor.de3/)'
      },
      {
        "name": "Facebook:",
        "value": '[Clique aqui](https://www.facebook.com/MelhoresDeTres)'
      },
      {
        "name": "Steam:",
        "value": '[Clique aqui](https://steamcommunity.com/groups/MelhorDeTres)'
      },
      {
        "name": "Twitter:",
        "value": '[Clique aqui](https://twitter.com/melhor_de3)'
      },
      {
        "name": "Email",
        "value": '`melhores.detres@gmail.com`'
      }
    ]
  };

await message.author.send({embed})
// await message.channel.send({ embed });
}
