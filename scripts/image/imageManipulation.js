module.exports = {
    createImage
};

const embedsImage = require('./embedsImage');

async function criarFotoSteam(message) {

  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(184, 184);

  const ctx = canvas.getContext('2d');

  const avatar = await Canvas.loadImage(await message.author.displayAvatarURL);

  const black = await Canvas.loadImage('./imagens/auxiliares/preto.png');

  const logo = await Canvas.loadImage('./imagens/auxiliares/LogoMD3cSombra.png');

  ctx.drawImage(black, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(avatar, 10, 10, (canvas.width - 20), (canvas.height - 20));

  ctx.drawImage(logo, 46, 100, 92, 92);

  message.channel.send(`Foto de: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoLaranja(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/Laranja.jpg');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoVerde(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/Verde.jpg');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoAzul(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/Azul.jpg');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoRosa(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/Rosa.jpg');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoAmarela(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/Amarela.jpg');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

async function criarFotoMD3(message) {
  const Canvas = require('canvas');

  const canvas = Canvas.createCanvas(1000, 1000);

  const ctx = canvas.getContext('2d');

  const image = await Canvas.loadImage('./imagens/auxiliares/LogoMD3.png');

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  message.channel.send(`Foto para: ${message.author.username}!`, { files: [canvas.toBuffer()]});
}

function createImage(message, opcao) {

    switch(opcao) {
        case 'steam':
            criarFotoSteam(message);
            break;
        case 'laranja':
            criarFotoLaranja(message);
            break;
        case 'verde':
            criarFotoVerde(message);
            break;
        case 'azul':
            criarFotoAzul(message);
            break;
        case 'rosa':
            criarFotoRosa(message);
            break;
        case 'amarela':
            criarFotoAmarela(message);
            break;
        case 'amarelo':
            criarFotoAmarela(message);
            break;
        case 'md3':
            criarFotoMD3(message);
            break;
        case 'cor':
            message.reply('\n```Mude a palavra "cor" por alguma das seguinte opções: laranja, azul, verde, amarela ou rosa.```');
            break;
        default:
            embedsImage.dicaCriacaoDeImagens(message);
            break;
    }
}
