/*
 * !!! DO NOT EDIT !!!
 * 
 * This is a meant to simulate a search engine with one function:
 * 
 *  search()
 *      - Given a string, return an array of podcast results of the form:
 * 
 *        [{
 *          "_id" : "5a592688b73aeb30532c6b5d",
 *          "blob" : "overdue is a podcast about the books you've been meaning to read..."
 *        }]
 * 
 */

const fs = require('fs');

// Import data
const searchDataRaw = fs.readFileSync('data/searchIndex.js');
const searchData = JSON.parse(searchDataRaw);

// Inserts a random delay
function _delay() {
    const delayMs = Math.floor(Math.random() * 1000);

    return new Promise((resolve) => { 
        setTimeout(resolve, delayMs)
    });
}

// Perform a simulated search
const search = (queryStr) => {
    const podcasts = [];

    return _delay().then(() => {
        for (const row of searchData) {
            // Do a very basic string match
            if (row.blob.includes(queryStr)) {
                podcasts.push(row);
            }
        }

        return podcasts;
    })
}

module.exports = {
    search: search
}