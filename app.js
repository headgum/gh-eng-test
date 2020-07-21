var SearchBackend = require('./lib/SearchBackend');
var DatabaseBackend = require('./lib/DatabaseBackend');

// What string to search for, change this for different results
var QUERY_STRING = 'funny'

var exampleSearch = function(query) {

    console.log("Search results for \"" + query + "\":");

    // Perform a search
    SearchBackend.search(query)
        .then(function(resultsArr) {
            console.log(resultsArr)

            var podcastIds = [];

            // Build a list of podcast ids for DatabaseBackend.getPodcastsByIds
            for (var i = 0; i < resultsArr.length; i++) {
                podcastIds.push(resultsArr[i]._id);
            }

            return podcastIds;
        })
        .then(function(podcastIds) {   
            // Retreive podcast data
            return DatabaseBackend.getPodcastsByIds(podcastIds);
        })
        .then(function(podcastData) {
            for (var i = 0; i < podcastData.length; i++) {
                // Output the podcast title
                console.log(podcastData[i].title);
            }
        })
}

exampleSearch(QUERY_STRING);