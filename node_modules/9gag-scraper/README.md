# 9gag-scraper

[![Build Status](https://travis-ci.org/shylesh107/9gag-scraper.svg?branch=master)](https://travis-ci.org/shylesh107/9gag-scraper)

*Scrape data from 9GAG website*

## Installation

npm install 9gag-scraper --save

## Usage

```js
var gagScraper = require('9gag-scraper')
```

## Scrape data from a 9GAG section

```js
new gagScraper("trending").getGags(function (error, data) {

    console.log(data.count); // Total posts returned
    console.log(data.gags); // posts object ( array of posts )

    console.log(data.gags[0].id); // 9GAG post ID
    console.log(data.gags[0].url); // 9GAG post URL
    console.log(data.gags[0].title); // 9GAG post title
    console.log(data.gags[0].image); // 9GAG post image link

});

// You can also pass in any valid section you want to scrape from ( Defaults to 'hot' )
new gagScraper("fresh").getGags(function (error, data) {
});

new gagScraper("meme").getGags(function (error, data) {
});
```

## NSFW section scraping won't work as it requires users to login to view the content.

## To get a random post

```js
new gagScraper().getRandom(function (error, data) {
    console.log(data.id); // 9GAG post ID
    console.log(data.url); // 9GAG post URL
    console.log(data.title); // 9GAG post title
    console.log(data.image); // 9GAG post image link
});

new gagScraper("random").getGags(function (error, data) {
});
```

## Tests

npm test