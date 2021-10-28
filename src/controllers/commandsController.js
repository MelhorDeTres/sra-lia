module.exports = {
    botCommands
}

const serverEntities = require('../entities/serverEntities');
const dbManipulation = require('../dataBase/dbManipulation');

const criadorDeImagens = require('../image/imageManipulation');
const audioPorURL = require('../audio/audioManipulation');

const generalEmbeds = require('../generalEmbeds');

async function verifyMessageChannel(message) {
    let valid = true;
    // 635170515937656835 = ID do Chat de Texto: assinaturas
    if (message.channel.id === '635170515937656835') return;
    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
        // await message.reply("\n\n**Para usar algum comando no Bot**\nUtilize o Chat <#709906204146794616>.");
        // await message.react("☑️");
        valid = false;
    }
    if (message.content.includes('https://discord.gg/')) {
        message.author.send(`**Olá, ${message.author.username}.**\n\nNosso Servidor não aceita compartilhamento de Links para outros Servidores.\nTente compartilhar no privado. 😉`);
        message.delete();
        valid = false;
    }
    return valid;
}

async function botCommands(message) {

    if (!(verifyMessageChannel(message))) {
        return;
    }

    let parts = message.content.split(" ");
    let chamadaBot = parts[0].toLowerCase();
    let chamadaPorID = (message.channel.type !== "dm" && message.guild.member(message.mentions.users.first()) !== null) ? message.guild.member(message.mentions.users.first()).id : null;
    let comandoBase = (parts[1] !== undefined) ? parts[1].toLowerCase() : undefined;
    let adicional = (parts[2] !== undefined) ? parts[2].toLowerCase() : undefined;

    let author = await dbManipulation.getUser(message);
    if (dbManipulation.existUser(author)) {

        if (chamadaBot === 'bot' || chamadaPorID === '675043887617933359') {
            if (serverEntities.ehSalaDeTextoParaBot(message)) {

                if (await embedsFunctions(message, comandoBase)) return;
                if (await dbAndEntitiesFunctions(message, comandoBase, adicional)) return;
                if (await imageFunctions(message, comandoBase, adicional)) return;
                if (await musicFunctions(message, comandoBase, adicional)) return;

                await generalEmbeds.generalCommands(message);
                await message.react("☑️");
            } else {
                await message.reply("\n\n**Para usar algum comando no Bot**\nUtilize o Chat <#709906204146794616>.");
                await message.react("☑️");
            }
        } else {
            if (serverEntities.ehSalaDeTextoParaBot(message)) {
                await message.reply("\n\n**Para conversar com outras pessoas.**\nUtilize o Chat <#638515808288505906> ou <#637315977260040223>.");
                await message.react("⛔");
            }
        }
    } else if ((chamadaBot === 'bot' || chamadaPorID === '675043887617933359') && comandoBase === 'registrar') {
        await dbAndEntitiesFunctions(message, comandoBase, adicional);
    } else {
        await dbManipulation.dicaRegistrarPerfil(message);
    }
    return;
}






async function embedsFunctions(message, comandoBase) {
    switch (comandoBase) {
        case 'comandos':
            generalEmbeds.generalCommands(message);
            await message.react("☑️");
            return true;

        case 'membro':
            generalEmbeds.memberCommands(message);
            await message.react("☑️");
            return true;

        case 'plataformas':
            generalEmbeds.printPlataformas(message);
            await message.react("☑️");
            return true;

        case 'ping':
            generalEmbeds.botPing(message);
            await message.react("☑️");
            return true;
    }
    return false;
}

async function dbAndEntitiesFunctions(message, comandoBase, adicional) {
    switch (comandoBase) {
        case 'registrar':
            let urlSteam = adicional;
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                await dbManipulation.dicaAtualizarSteam(message, dadosUser);
            } else {
                await dbManipulation.registerMember(message, urlSteam);
                let dadosNewUser = await dbManipulation.getUser(message);
                if (dadosNewUser !== null) {
                    await serverEntities.setMembro(message, dadosNewUser);
                }
            }
            await message.react("☑️");
            return true;

        case 'perfil':
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                dbManipulation.getEmbedPerfil(message, dadosUser);
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'steam':
            let newSteam = adicional;
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                dbManipulation.atualizaSteam(message, newSteam, dadosUser);
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'twitter':
            let newTwitter = adicional;
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                dbManipulation.atualizaTwitter(message, newTwitter, dadosUser);
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'facebook':
            let newFacebook = adicional;
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                dbManipulation.atualizaFacebook(message, newFacebook, dadosUser);
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'instagram':
            let newInstagram = adicional;
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                dbManipulation.atualizaInstagram(message, newInstagram, dadosUser);
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'nickname':
            let name = message.author.username;
            let oldNick = message.member.nickname;
            let newNick = serverEntities.createNewNick(message);
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                await dbManipulation.atualizaNickname(message, name, newNick, oldNick, dadosUser)
                    .then(function () {
                        serverEntities.setNewNickname(message, newNick)
                    })
                    .catch(async function () {
                        console.log('Houve um erro na Atualização de Nickname. Por favor, tente novamente.');
                        await message.channel.send('Houve um erro na Atualização de Nickname. Por favor, tente novamente.');
                    })
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;

        case 'adicionar':
            dadosUser = await dbManipulation.getUser(message);
            if (dbManipulation.existUser(dadosUser)) {
                let mentionedUser = await message.guild.member(message.mentions.users.first());
                let userForRole = await dbManipulation.getUserByMention(mentionedUser);

                if (!mentionedUser) {
                    await message.reply("\nVocê não inseriu um Usuário para atribuir o cargo.");
                } else if (dbManipulation.existUser(userForRole)) {
                    serverEntities.setNewCargo(message, mentionedUser);
                } else {
                    await message.reply("\nO Usuário não é registrado no Servidor MD3.");
                }
            } else {
                dbManipulation.dicaRegistrarPerfil(message);
            }
            await message.react("☑️");
            return true;
    }
    return false;
}

async function imageFunctions(message, comandoBase, adicional) {
    switch (comandoBase) {
        case 'foto':
            let opcaoDeImagem = adicional;
            criadorDeImagens.createImage(message, opcaoDeImagem);
            await message.react("☑️");
            return true;
    }
    return false;
}

async function musicFunctions(message, comandoBase, adicional) {
    switch (comandoBase) {
        case 'musica':
            audioPorURL.musicCommands(message);
            await message.react("☑️");
            return true;

        case 'play':
            await message.author.send('Função musical em desenvolvimento.');
            // let url = adicional;
            // audioPorURL.audioPlay(message, url);
            await message.react("☑️");
            return true;

        case 'skip':
            await message.author.send('Função musical em desenvolvimento.');
            // audioPorURL.audioSkip(message);
            await message.react("☑️");
            return true;

        case 'pause':
            await message.author.send('Função musical em desenvolvimento.');
            // audioPorURL.audioPause(message);
            await message.react("☑️");
            return true;

        case 'stop':
            await message.author.send('Função musical em desenvolvimento.');
            // audioPorURL.audioStop(message);
            await message.react("☑️");
            return true;

        case 'resume':
            await message.author.send('Função musical em desenvolvimento.');
            // audioPorURL.audioResume(message);
            await message.react("☑️");
            return true;
    }
    return false;
}