const db = require('../config/connection');
const { User, Friend } = require('../models/index');
const usersSeed = require('./users.json');
const friendsSeed = require('./friends.json');
const cleanDB = require('./cleanDb');

db.once('open', async () => {
    try {
        await cleanDB('Friend', 'friends');
        await cleanDB('User', 'users');

        const users = await User.create(usersSeed);
        const friends = await Friend.create(friendsSeed);
        if (users.length > 0 && friends.length > 0) {
            // Push the first friend's ObjectId to the friends array of the first user
            // Extract all friend ObjectIds
            const friendsObjectIds = friends.map(friend => friend._id);

            // Push all friend ObjectIds to the first user's friends array
            users[0].friends.push(...friendsObjectIds);


            // Save the updated user
            await users[0].save();
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeded');
    process.exit(0);
});
