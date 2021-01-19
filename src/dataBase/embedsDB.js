module.exports = {
  exibePerfil,

  dicaRegistrarPerfil,
  dicaAtualizarSteam,
  dicaAtualizarNick,
  dicaAtualizarTwitter,
  dicaAtualizarFacebook,
  dicaAtualizarInstagram,

  confirmSetSteam,
  confirmSetNick,
  confirmSetTwitter,
  confirmSetFacebook,
  confirmSetInstagram
};

/* Embeds relacionados a Exibição, Edição e Registro do Perfil */

async function exibePerfil(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Perfil MD3 de`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "<:steam:713470489795887184> Steam",
        "value": `[Clique aqui](${dadosUser.urls.urlSteam})`
      },
      {
        "name": "<:instagram2:713143200658751573> Instagram",
        "value": `[Clique aqui](${dadosUser.urls.urlInstagram})`
      },
      {
        "name": "<:twitter2:713143586975121522> Twitter",
        "value": `[Clique aqui](${dadosUser.urls.urlTwitter})`
      },
      {
        "name": "<:facebook2:713143127766073416> Facebook",
        "value": `[Clique aqui](${dadosUser.urls.urlFacebook})`
      }
    ]
  };

  // const embed = new Discord.MessageEmbed()
  // .setColor('#0099ff')
	// .setTitle(`${dadosUser.nick}`)
	// .setURL(`${dadosUser.urls.urlSteam}`)
	// .setAuthor(`Perfil MD3 de`, "https://imgur.com/Jr3fWGy.jpg", 'https://discord.js.org')
	// .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	// .addFields(
	// 	{ name: "<:steam:713470489795887184> Steam", value: `[Clique aqui](${dadosUser.urls.urlSteam})` },
	// 	{ name: "<:instagram2:713143200658751573> Instagram", value: `[Clique aqui](${dadosUser.urls.urlInstagram})` },
	// 	{ name: "<:twitter2:713143586975121522> Twitter", value: `[Clique aqui](${dadosUser.urls.urlTwitter})` },
	// 	{ name: "<:facebook2:713143127766073416> Facebook", value: `[Clique aqui](${dadosUser.urls.urlFacebook})` },
	// )
	// .addField('Inline field title', 'Some value here', true)
	// .setImage('https://i.imgur.com/wSTFkRM.png')
	// .setTimestamp(new Date())
	// .setFooter("Melhor de todas, Melhor de Três", "https://imgur.com/sSIyIte.png");

  await message.channel.send({ embed });
}

// DICAS

async function dicaRegistrarPerfil(message) {
  dadosUser = {
    nick: message.author.username,
    urls: {
      urlSteam: "https://steamcommunity.com/groups/MelhorDeTres"
    },
    avatar: message.author.displayAvatarURL
  }
  let embed = {
    "title": `${dadosUser.nick}`,
    "description": `Para se registrar, pelo Chat <#709906204146794616>,
    copie o Link de seu perfil Steam e use os comandos a seguir:`,
    "url": `${dadosUser.urls.urlSteam}`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${dadosUser.avatar}`
    },
    "author": {
      "name": `Você ainda não esta registrado no servidor.`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Exemplo 1:",
          "value": "`Bot registrar https://steamcommunity.com/id/.../`"
        },
        {
          "name": "Exemplo 2:",
          "value": "`Bot registrar https://steamcommunity.com/profiles/`"
        },
        {
          "name": "Para obter seu link url Steam:",
          "value": "`Clique com o Botão direito e Copie o Endereço, verídico, da Página no seu Perfil Steam.`"
        }
      ]
  };
  await message.author.send({ embed });
}

async function dicaAtualizarSteam(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Para atualizar seu Perfil Steam:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Utilize o comando:",
          "value": "`Bot steam SuaUrlSteam`"
        },
        {
          "name": "Exemplo 1:",
          "value": "`Bot steam https://steamcommunity.com/id/.../`"
        },
        {
          "name": "Exemplo 2:",
          "value": "`Bot steam https://steamcommunity.com/profiles/`"
        },
        {
          "name": "Para obter seu link url Steam:",
          "value": "`Clique com o Botão direito e Copie o Endereço, verídico, da Página no seu Perfil Steam.`"
        }
      ]
  };
    await message.author.send({ embed });
}

async function dicaAtualizarTwitter(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Para atualizar seu Perfil Twitter:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Utilize o comando:",
          "value": "`Bot twitter SuaUrlTwitter`"
        },
        {
          "name": "Exemplo:",
          "value": "`Bot twitter https://twitter.com/`"
        }
      ]
  };
  await message.author.send({ embed });
}

async function dicaAtualizarFacebook(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Para atualizar seu Perfil Facebook:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Utilize o comando:",
          "value": "`Bot facebook SuaUrlFacebook`"
        },
        {
          "name": "Exemplo:",
          "value": "`Bot facebook https://www.facebook.com/`"
        }
      ]
  };
  await message.author.send({ embed });
}

async function dicaAtualizarInstagram(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Para atualizar seu Perfil Instagram:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Utilize o comando:",
          "value": "`Bot instagram SuaUrlInstagram`"
        },
        {
          "name": "Exemplo:",
          "value": "`Bot instagram https://www.instagram.com/`"
        }
      ]
  };
  await message.author.send({ embed });
}

async function dicaAtualizarNick(message, dadosUser) {
  let embed = {
    "title": `${dadosUser.nick}`,
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
      "name": `Para atualizar seu Nickname:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
        {
          "name": "Utilize o comando:",
          "value": "`Bot nickname SeuNovoNickname`"
        },
        {
          "name": "Exemplo:",
          "value": "`Bot nickname novoNickname`"
        },
        {
          "name": "Lembrando que:",
          "value": "`O novo nickname deve ter 1 até, no máximo, 3 nomes.`"
        }
      ]
  };
    await message.author.send({ embed });
}

// CONFIRMA SETS

async function confirmSetSteam(message, dadosUser) {
  let embed = {
    "title": `Página Steam`,
    "url": `${dadosUser.urls.urlSteam}`,
    "description": `para: __${dadosUser.urls.urlSteam}__`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `${dadosUser.nick} atualizou a própia`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil MD3, digite:",
        "value": "`Bot perfil`"
      }
    ]
  };

  await message.channel.send({ embed });
}

async function confirmSetTwitter(message, dadosUser) {
  let embed = {
    "title": `Página Twitter`,
    "url": `${dadosUser.urls.urlTwitter}`,
    "description": `para: __${dadosUser.urls.urlTwitter}__`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `${dadosUser.nick} atualizou a própia`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil MD3, digite:",
        "value": "`Bot perfil`"
      }
    ]
  };

  await message.channel.send({ embed });
}

async function confirmSetFacebook(message, dadosUser) {
  let embed = {
    "title": `Página Facebook`,
    "url": `${dadosUser.urls.urlFacebook}`,
    "description": `para: __${dadosUser.urls.urlFacebook}__`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `${dadosUser.nick} atualizou a própia`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil MD3, digite:",
        "value": "`Bot perfil`"
      }
    ]
  };

  await message.channel.send({ embed });
}

async function confirmSetInstagram(message, dadosUser) {
  let embed = {
    "title": `Página Instagram`,
    "url": `${dadosUser.urls.urlInstagram}`,
    "description": `para: __${dadosUser.urls.urlInstagram}__`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `${dadosUser.nick} atualizou a própia`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil MD3, digite:",
        "value": "`Bot perfil`"
      }
    ]
  };

  await message.channel.send({ embed }); 
}

async function confirmSetNick(message, dadosUser, name, newNick, oldNick) {
  let embed = {
    // "title": `Nickname`,
    "title": ` <:steam:713470489795887184> ${newNick}`,
    "url": `${dadosUser.urls.urlSteam}`,
    // "description": `para: __${message.author.username}__`,
    // "description": `<:steam:713470489795887184> [${newNick}](${dadosUser.urls.urlSteam})`,
    "color": 128994,
    "footer": {
      "icon_url": "https://imgur.com/sSIyIte.png",
      "text": "Melhor de todas, Melhor de Três"
    },
    "thumbnail": {
      "url": `${message.author.displayAvatarURL}`
    },
    "author": {
      "name": `"${oldNick}" atualizou o nickname para:`,
      "icon_url": "https://imgur.com/Jr3fWGy.jpg"
    },
    "timestamp": new Date(),
    "fields": [
      {
        "name": "Para exibir seu Perfil MD3, digite:",
        "value": "`Bot perfil`"
      }
    ]
  };

  await message.channel.send({ embed });
}
