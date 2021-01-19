module.exports = {
    getUser,
    getUserByMention,
    existUser,

    registerMember,

    atualizaSteam,
    atualizaTwitter,
    atualizaFacebook,
    atualizaInstagram,
    atualizaNickname,

    getEmbedPerfil,
    dicaRegistrarPerfil,
    dicaAtualizarSteam
};

const mongoose = require('mongoose');
const Member = require('./models/memberSchema.js');
const config = require('../../config.json');

mongoose.connect(config.string_de_conexao, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const embedsDB = require('./embedsDB');

async function getUser(message) {
    let userID = message.author.id;
    
    return await Member.findOne({
        _id: userID
    },
    (err, member) => {
        if (err) console.log(err);
        if (!member) {
            return undefined;
        } else {
            return member;
        }
    });
}

async function getUserByMention(mentionedUser) {
    if (mentionedUser === null || mentionedUser === undefined) {
        return undefined;
    } else {
        let user = mentionedUser.user;
        return await Member.findOne({
            _id: user.id
        },
        (err, member) => {
            if (err) console.log(err);
            if (!member) {
                return undefined;
            } else {
                return member;
            }
        });
    }
}

function existUser(dadosUser) {
    if (dadosUser === undefined || dadosUser === null) {
        return false;
    } else {
        return true;
    }
}

async function registerMember(message, usedUrl) {
    if (urlValido(message, usedUrl)) {
        await registerUserInDB(message, usedUrl);
    } else {
        embedsDB.dicaRegistrarPerfil(message);
    }
}

async function registerUserInDB(message, usedUrl) {
    let urls = {
        urlSteam: usedUrl,
        urlFacebook: "https://www.facebook.com/MelhoresDeTres",
        urlInstagram: "https://www.instagram.com/melhor.de3/",
        urlTwitter: "https://twitter.com/melhor_de3"
    }
    let coins = {
        qnt: 0,
        lastBonus: Date()
    }

    let member = new Member({
        _id: message.author.id,
        nick: message.author.username,
        urls,
        coins
    })

    await member.save()
    .then(async function() {
        console.log('Registro de Usuário MD3 realizado com sucesso. Seja bem-vindo(a).');
        await message.author.send('Registro de Usuário MD3 realizado com sucesso. Seja bem-vindo(a).');
    })
    .catch(async function() {
        console.log('Houve um erro no Registro do Usuário. Por favor, tente novamente.');
        message.channel.send('Houve um erro no Registro do Usuário. Por favor, tente novamente.');
    });
}

// ATUALIZA (SET) PERFIL

function urlValido(message, usedUrl) {
    let parts = message.content.split(" ");
    let opcao = parts[1].toLowerCase();

    if (usedUrl === undefined) return false;
    switch (opcao) {
        case 'registrar':
            if (usedUrl.includes('https://steamcommunity.com/id/') || 
            usedUrl.includes('https://steamcommunity.com/profiles/') ||
            usedUrl.includes('http://steamcommunity.com/id/') ||
            usedUrl.includes('http://steamcommunity.com/profiles/')) { 
                return true;
            }
            else { 
                return false;
            }
        case 'steam':
            if (usedUrl.includes('https://steamcommunity.com/id/') || 
            usedUrl.includes('https://steamcommunity.com/profiles/') ||
            usedUrl.includes('http://steamcommunity.com/id/') ||
            usedUrl.includes('http://steamcommunity.com/profiles/')) { 
                return true;
            }
            else { 
                return false;
            }
        case 'twitter':
            if(usedUrl.includes('https://twitter.com/')) {
                return true;
            } else {
                return false;
            }
        case 'instagram':
            if (usedUrl.includes('https://www.instagram.com/')) {
                return true;
            } else {
                return false;
            }
        case 'facebook':
            if (usedUrl.includes('https://www.facebook.com/')) {
                return true;
            } else {
                return false;
            }
    }
}

async function atualizaSteam(message, urlSteam, dadosUser) {
    if (urlValido(message, urlSteam)) {
        let newURLS = dadosUser.urls;
        newURLS.urlSteam = urlSteam;

        await Member.update(
            { _id: dadosUser._id }, { $set: { urls : newURLS  } }
        )

        embedsDB.confirmSetSteam(message, dadosUser);
        console.log('Atualização de Steam realizada com sucesso.');
        await message.author.send('Atualização de Steam realizada com sucesso.');
    } else {
        embedsDB.dicaAtualizarSteam(message, dadosUser);
        return;
    }
}

async function atualizaTwitter(message, urlTwitter, dadosUser) {
    if (urlValido(message, urlTwitter)) {
        let newURLS = dadosUser.urls;
        newURLS.urlTwitter = urlTwitter;

        await Member.update(
            { _id: dadosUser._id }, { $set: { urls : newURLS  } }
        )
        
        embedsDB.confirmSetTwitter(message, dadosUser);
        console.log('Atualização de Twitter realizada com sucesso.');
        await message.author.send('Atualização de Twitter realizada com sucesso.');
    } else {
        embedsDB.dicaAtualizarTwitter(message, dadosUser);
        return;
    }
}

async function atualizaFacebook(message, urlFacebook, dadosUser) {
    if (urlValido(message, urlFacebook)) {
        let newURLS = dadosUser.urls;
        newURLS.urlFacebook = urlFacebook;

        await Member.update(
            { _id: dadosUser._id }, { $set: { urls : newURLS  } }
        )
        
        embedsDB.confirmSetFacebook(message, dadosUser);
        console.log('Atualização de Facebook realizada com sucesso.');
        await message.author.send('Atualização de Facebook realizada com sucesso.');
    } else {
        embedsDB.dicaAtualizarFacebook(message, dadosUser);
        return;
    }
}

async function atualizaInstagram(message, urlInstagram, dadosUser) {
    if (urlValido(message, urlInstagram)) {
        let newURLS = dadosUser.urls;
        newURLS.urlInstagram = urlInstagram;

        await Member.update(
            { _id: dadosUser._id }, { $set: { urls : newURLS  } }
        )
        
        embedsDB.confirmSetInstagram(message, dadosUser);
        console.log('Atualização de Instagram realizada com sucesso.');
        await message.author.send('Atualização de Instagram realizada com sucesso.');
    } else {
        embedsDB.dicaAtualizarInstagram(message, dadosUser);
        return;
    }
}

async function atualizaNickname(message, name, newNick, oldNick, dadosUser) {
    let servidor = message.guild.id;
    if (nicknameValido(message)) {

        await Member.update(
            { _id: dadosUser._id }, { $set: { nick : name  } }
        )

        embedsDB.confirmSetNick(message, dadosUser, name, newNick, oldNick);
        console.log('Atualização de Nickname realizada com sucesso.');
        await message.author.send('Atualização de Nickname realizada com sucesso.');
    } else {
        embedsDB.dicaAtualizarNick(message, dadosUser);
        return;
    }
}

function nicknameValido(message) {
    let parts = message.content.split(" ");
    let sucess = true;
    if (parts[5] !== undefined) {
        sucess = false;
    } else if (parts[2] === undefined) {
        sucess = false;
    }
    return sucess;
}

// Embeds 

async function dicaRegistrarPerfil(message) {
    embedsDB.dicaRegistrarPerfil(message);
}

async function dicaAtualizarSteam(message, dadosUser) {
    embedsDB.dicaAtualizarSteam(message, dadosUser);
}

async function getEmbedPerfil(message, dadosUser) {
    embedsDB.exibePerfil(message, dadosUser);
}