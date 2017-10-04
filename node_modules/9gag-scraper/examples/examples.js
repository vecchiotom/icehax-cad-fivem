var gagScraper = require('../lib/9gag-scraper.js');

new gagScraper().getGags(function (error, data) {

    console.log(data.count); // Total posts returned
    console.log(data.gags); // posts object ( array of posts )

    console.log(data.gags[0].id); // 9GAG post ID
    console.log(data.gags[0].url); // 9GAG post URL
    console.log(data.gags[0].title); // 9GAG post title
    console.log(data.gags[0].image); // 9GAG post image link

});

// You can also pass in the section you want to pass in as an argument ( Defaults to 'hot' )
new gagScraper("fresh").getGags(function (error, data) {
});

new gagScraper("trending").getGags(function (error, data) {
});

// To get a random post
new gagScraper().getRandom(function (error, data) {
    console.log(data.id); // 9GAG post ID
    console.log(data.url); // 9GAG post URL
    console.log(data.title); // 9GAG post title
    console.log(data.image); // 9GAG post image link
});