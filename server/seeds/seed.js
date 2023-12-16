const db = require('../config/connection');
const { User,Friends } = require('../models');
const cleanDB = require('./cleanDb');

const userData = require('./user.json')
const friendsData = require('./friends.json')

db.once('open', async () => {
    await cleanDB("User", 'users');
    await cleanDB("Friends", 'friends');

    const users = await User.create(userData);
    const friends = await Friends.create(friendsData);

    if (users.length > 0 && friends.length > 0) {
        // Push the first friend's ObjectId to the friends array of the first user
        // Extract all friend ObjectIds
        const friendsObjectIds = friends.map(friend => friend._id);

        // Push all friend ObjectIds to the first user's friends array
        users[0].friends.push(...friendsObjectIds);


        // Save the updated user
        await users[0].save();
    } else {
        console.log('No users or friends found');
    }

    console.log('Database Seeded');
    process.exit(0);
});
