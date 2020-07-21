# Github Engineering Test

## Instructions

`app.js` is a small code fragment meant to simulate a common work case: **conducting a search with a search engine** and using the **results to look up additional data in a database**. Specifically: our code takes a search term as input, conducts a search, and outputs a list of associated podcasts' titles. The app has two (fake) backend libraries: `lib/DatabaseBackend` and `lib/SearchBackend`. 

Your assignment is to modify (or completely rewrite!) `app.js` to:

 1) **Conform with more modern ES6 practices for improved readability and function.** Basically, clean it up to how you would write code! Improvements might include proper variable assignment keywords, `await`/`async` where appropriate, inline functions, etc. Try and strike a balance between readability and not being "too clever". If you want to use advanced language features that might be "experimental" to NodeJS, please see the additional notes below.

 2) **Add an additional piece of functionality.** Specifically, use the `DatabaseBackend::getUserById` method to output both the podcast title *and it's hosts' names*.

## Install & How to Run

```
npm install
npm run start
```

You should get the following output by default:

```
Search results for "funny":
All Fantasy Everything
Mindhouse Podcast
Why Won’t You Date Me? with Nicole Byer
A Funny Feeling
The Dumbbells
```

## Additional Notes & Hints

 - Please don't use any 3rd party libraries. NodeJS-native stuff is fine.
 - If you're used to writing JS in a workflow with transpiling (ie Webpack/Babel), you can try `npm run start:es6`, which runs the `app.es6.js` file and is executed by **Babel**. You *can* `npm install` any [Babel plugins](https://babeljs.io/docs/en/plugins/) you wish.
 - When it comes to search results, order matters! Be sure you're maintaining the sort the search engine provides.
 - The various search and query methods have small, random latencies built in. Be mindful of ways you might minimize these.