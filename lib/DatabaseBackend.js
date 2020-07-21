/*
 * !!! DO NOT EDIT !!!
 * 
 * This is a meant to simulate a database store with two
 * basic functions:
 * 
 *  getPodcastsByIds()
 *      - Given an array of podcast IDs (ie ["5a592688b73aeb30532c6b67"]),
 *        return an array of podcast objects. The ordering is maintained,
 *        and non-existant podcasts are omitted. Always returns an array.
 *        Uses data/podcastData.js as a data source.
 * 
 *  getUserById()
 *      - Given a podcast ID, return a single user object. Throws an
 *        exception if no user found. Uses data/userData.js as a data source.
 */

const fs = require('fs');

// Import data
const podcastDataRaw = fs.readFileSync('data/podcastData.js');
const podcastData = JSON.parse(podcastDataRaw);

const userDataRaw = fs.readFileSync('data/userData.js');
const userData = JSON.parse(userDataRaw);

// Inserts a random delay
function _delay() {
    const delayMs = Math.floor(Math.random() * 1000);

    return new Promise((resolve) => { 
        setTimeout(resolve, delayMs)
    });
}

// Get an array of podcasts, always returns an array
const getPodcastsByIds = (ids) => {
    const podcasts = []

    return _delay().then(() => {
        // Conduct a naive search for podcasts
        for (const id of ids) {
            for (const data of podcastData) {
                if (data._id == id) {
                    podcasts.push(data);
                }
            }
        }

        return podcasts;
    })
}

// Get a single user, return null 
const getUserById = (id) => {
    return _delay().then(() => {
        // Conduct a naive search for a user
        for (const data of userData) {
            if (data._id == id) {
                return data;
            }
        }

        throw new Error(`no user found for id: ${id}`);
    })
}

module.exports = {
    getPodcastsByIds: getPodcastsByIds,
    getUserById: getUserById
}