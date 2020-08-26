module.exports = {
	audioPlay,
	audioPause,
	audioResume,
	audioSkip,
	audioStop,
	musicCommands
};

const ytdl = require('ytdl-core');
const embedsAudio = require('./audioEmbeds');

var servidor = {
	queue: []
};

/* AUXILIAR */

function verificaPermissao(message) {
	let sucess = false;
	if (message.member.roles.some(r=>["Mídia"].includes(r.name))) {
		sucess = true;
	}
	return sucess;
}

/* EFETIVAS */

async function audioPlay(message, url) {
	if (!verificaPermissao(message)) {
		await message.reply('\nDesculpe-nos, mas você não tem permissão para essa função. Contate algum ADM.');
		return;
	}
	if (url == undefined) {
		embedsAudio.embedsAudio.dicaAudio(message);
		return;
	}
	if(!message.member.voiceChannel) {
		embedsAudio.dicaAudio(message);
		return;
	}
	servidor.queue.push(url);
	if(!message.guild.voiceConnection) {
		message.member.voiceChannel.join().then(function(connection) {
			playYtdl(connection, message);
		});
	}
}

async function audioSkip(message) {
	if (!verificaPermissao(message)) {
		await message.reply('\nDesculpe-nos, mas você não tem permissão para essa função. Contate algum ADM.');
		return;
	}
	if(!message.member.voiceChannel || !message.guild.voiceConnection) {
		embedsAudio.dicaAudio(message);
		return;
	}
	if(!servidor.dispatcher) {
		await message.reply('Queue limpa, nada para dar skip.');
		return;
	} else servidor.dispatcher.end();
}

async function audioStop(message) {
	if (!verificaPermissao(message)) {
		await message.reply('\nDesculpe-nos, mas você não tem permissão para essa função. Contate algum ADM.');
		return;
	}
	if(!message.member.voiceChannel || !message.guild.voiceConnection) {
		embedsAudio.dicaAudio(message);
		return;
	} else message.guild.voiceConnection.disconnect();
}

async function audioResume(message) {
	if (!verificaPermissao(message)) {
		await message.reply('\nDesculpe-nos, mas você não tem permissão para essa função. Contate algum ADM.');
		return;
	}
	if(!message.member.voiceChannel || !message.guild.voiceConnection) {
		embedsAudio.dicaAudio(message);
		return;
	}
	if(!servidor.dispatcher) {
		await message.reply('Queue limpa, nada para continuar.');
		return;
	} else servidor.dispatcher.resume();
}


async function audioPause(message) {
	if (!verificaPermissao(message)) {
		await message.reply('\nDesculpe-nos, mas você não tem permissão para essa função. Contate algum ADM.');
		return;
	}
	if(!message.member.voiceChannel || !message.guild.voiceConnection) {
		embedsAudio.dicaAudio(message);
		return;
	}
	if(!servidor.dispatcher) {
		await message.reply('Queue limpa, nada para pausar.');
		return;
	} else servidor.dispatcher.pause();
}


function playYtdl(connection, message) {
	servidor.dispatcher = connection.playStream(ytdl(servidor.queue[0], { filter: "audioonly" }));
	servidor.queue.shift();
	servidor.dispatcher.on("end", function() {
		if(!servidor.queue[0])
			connection.disconnect();
		else
			playYtdl(connection, message);
	});
}

async function musicCommands(message) {
	embedsAudio.musicCommands(message);
}