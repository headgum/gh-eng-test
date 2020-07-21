/*
 * This is an alternative starting point from app.js and is
 * executed with Babel. See the Additional Notes section of
 * README.md for more info.
 */

const SearchBackend = require('./lib/SearchBackend');
const DatabaseBackend = require('./lib/DatabaseBackend');

// What string to search for
const QUERY_STRING = 'funny';

const exampleSearch = async(query) => {

    // Perform a search
    const results = await SearchBackend.search(query);

    // ...

}

exampleSearch(QUERY_STRING);