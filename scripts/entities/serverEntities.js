module.exports = {
    ehSalaDeTextoParaBot,
    setMembro,
    setNewCargo,
    createNewNick,
    setNewNickname
};

/* Funções relacionadas a Atribuições de Cargos e Nomes */

const embedsServerEntities = require('./embedsServerEntities');

function ehSalaDeTextoParaBot(message) {
    if (['709906204146794616', '637322798003519499'].includes(message.channel.id)) {
        // 709906204146794616 = ID do Chat de Texto: bot_commands
        // 637322798003519499 = ID do Chat de Texto: execute_your_bot
        return true;
    }
    return false;
}

async function setMembro(message, dadosUser) {
    if (!message.member.roles.some(r=>["Staff", "Programador", "Mídia"].includes(r.name))) {
        try {
            await message.member.addRole('656595725794148383');
            let newNick = 'MD3 ' + message.author.username;
            await message.member.setNickname(newNick);
        } catch {
            console.log('Houve um erro no Registro de Cargo. Por favor, tente novamente.');
            await message.channel.send('Houve um erro no Registro de Cargo. Por favor, tente novamente.');
            return;
        }
    }
    await embedsServerEntities.confirmNewMember(message, dadosUser);
}

async function setNewCargo(message, mentionedUser) {
    let cargo = message.mentions.roles.first();

    if (cargo === undefined) {
        await message.reply("\nVocê não inseriu um Cargo para atribuir.");
    } else {
        let idCargo = cargo.id;
        opcoesCargos(message, idCargo, mentionedUser);
    }
}

async function opcoesCargos(message, cargo, mentionedUser) {
    switch(cargo) {
        case '705040415216238593':
            setNewPlayer(message, cargo, mentionedUser);
            break;
        case '635179356041379869':
            setNewMod(message, cargo, mentionedUser);
            break;
        case '667389386685677578':
            setNewMidia(message, cargo, mentionedUser);
            break;
        case '638512270917369868':
            setNewDev(message, cargo, mentionedUser);
            break;
        default:
            await message.reply("\nO servidor não possui atribuição para outros Cargos.")
            break;
    }
}

async function setNewPlayer(message, cargo, user) {
    if (message.member.roles.some(r=>["Staff"].includes(r.name))) {
            await user.addRole(cargo);
            await embedsServerEntities.agoraEhPlayer(message, user);
    } else {
        await message.reply("\nVocê não possui Cargo para efetuar esse Comando.")
    }
}

async function setNewMod(message, cargo, user) {
    if (message.member.roles.some(r=>["Staff"].includes(r.name))) {
            await user.addRole(cargo);
            let newNick = 'ADM ' + user.user.username
            await user.setNickname(newNick);
            await embedsServerEntities.agoraEhMod(message, user);
    } else {
        await message.reply("\nVocê não possui Autorização para efetuar esse Comando.")
    }
}

async function setNewMidia(message, cargo, user) {
    if (message.member.roles.some(r=>["Staff"].includes(r.name))) {
            await user.addRole(cargo);
            let newNick = 'MID ' + user.user.username;
            await user.setNickname(newNick);
            await embedsServerEntities.agoraEhMidia(message, user);
    } else {
        await message.reply("\nVocê não possui Autorização para efetuar esse Comando.")
    }
}

async function setNewDev(message, cargo, user) {
    if ((message.member.roles.some(r=>["Staff"].includes(r.name)) || 
            message.member.roles.some(r=>["Programador"].includes(r.name)))) {
            await user.addRole(cargo);
            let newNick = 'DEV ' + user.user.username;
            await user.setNickname(newNick);
            await embedsServerEntities.agoraEhDev(message, user);
    } else {
        await message.reply("\nVocê não possui Autorização para efetuar esse Comando.")
    }
}

function createNewNick(message) {
    let parts = message.content.split(" ");
    let nick1 = parts[2];
    let nick2 = parts[3];
    let nick3 = parts[4];
    let newNick = nick1;
    
    if (nick3 !== undefined) {
        newNick += (' ' + nick2 + ' ' + nick3);
    } else if (nick2 != undefined) {
        newNick += (' ' + nick2);
    }
    return newNick;
}

async function setNewNickname(message, newNick) {
    if (message.member.roles.some(r=>["Staff"].includes(r.name))) {
        let nickWithRole = 'ADM ' + newNick;
        await message.member.setNickname(nickWithRole);
    } else if (message.member.roles.some(r=>["Programador"].includes(r.name))) {
        let nickWithRole = 'DEV ' + newNick;
        await message.member.setNickname(nickWithRole);
    } else if (message.member.roles.some(r=>["Mídia"].includes(r.name))) {
        let nickWithRole = 'MID ' + newNick;
        await message.member.setNickname(nickWithRole);
    } else if (message.member.roles.some(r=>["Membro", "Player"].includes(r.name))) {
        let nickWithRole = 'MD3 ' + newNick;
        await message.member.setNickname(nickWithRole);
    }
}