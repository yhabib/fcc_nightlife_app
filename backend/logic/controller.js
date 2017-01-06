const promise = require('request-promise');


module.exports.yelpRequest = function (location, sort) {
    const oauth = {
        consumer_key: process.env.YELP_CONSUMER_KEY,
        consumer_secret: process.env.YELP_CONSUMER_SECRET,
        token: process.env.YELP_TOKEN,
        token_secret: process.env.YELP_TOKEN_SECRET
    },
        term = 'bars',
        offset = 20,
        limit = 20,
        url = `https://api.yelp.com/v2/search?limit=${limit}&category_filter=${term}&sort=${sort}&location=${location}`,
        options = {
            json: true
        };

    return promise({ oauth: oauth, url: url, options: options }).then(data => JSON.parse(data));
}