const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
    try {
        let modelExists = await models[modelName].db.db.listCollections({
            name: collectionName
        }).toArray()

        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    } catch (err) {
        throw err;
    }
}
// function that does exaclty what is says cleans up databse before running seed.js