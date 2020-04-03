const mongo = require('../lib/mongo');
const client = mongo.clients;


module.exports = {

    /**
     * @param {ObjectId} id
     * @return {client} a client object
     */
    getClientByID: function getUserByID(id) {
        return client
            .findOne({ClientID: id})
            .exec();
    },


};
