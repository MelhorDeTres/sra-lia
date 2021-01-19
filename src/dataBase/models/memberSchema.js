const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    _id: String,
    nick: String,
    urls: {
        urlSteam: String,
        urlFacebook: String,
        urlInstagram: String,
        urlTwitter: String,
    },
    coins: {
        qnt: Number,
        lastBonus: Date
    }
});

module.exports = mongoose.model("Member", memberSchema);