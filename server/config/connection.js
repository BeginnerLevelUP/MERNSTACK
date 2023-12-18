const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/secondTryDB');
// even if you haven't created the database just passing in a name to the url will create one for you
module.exports = mongoose.connection;
