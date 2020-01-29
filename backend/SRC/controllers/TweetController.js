const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet); //Todo mundo recceb um evento chamado tweet onde todos recebem em tempo real

        return res.json(tweet);
    },

};