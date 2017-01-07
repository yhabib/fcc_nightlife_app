const express = require('express'),
    router = express.Router(),
    controller = require('./controller');


/**
 * GET     /locals              ->  index
 * POST    /locals/:location             ->  create
 * GET     /locals/:location          ->  show
 * PUT     /locals/:location          ->  update
 * DELETE  /locals/:location          ->  destroy
 */


router
    .get('/', (req, res) => {
        const api = {
            "/bars?query": "Giving an valid Yelp location returns all the locals in your area",
            "/vote-up?query": "Post || Put: Giving the id of a bar -> name + location => stores this bar and adds a visitor",
            "/vote-down?query": "Put || Delete: Giving the id search this bar on the DB and after substracting a vistior if the count is cero deletes the bar frm the DB"
        };
        res.json(api);
    })
    .get('/locals/:location', (req, res) => {
        let location = req.params.location,
            sort = 0,
            bars = [];
        // check if the id is a valid one
        // make request

        controller
            .yelpRequest(location, sort)
            .then(data => {
                bars = data.businesses.map(bar => {
                    return {
                        name: bar.name,
                        image_url: bar.image_url,
                        snippet: bar.snippet_text,
                        url: bar.url,
                        rating: bar.rating,
                        attending: []
                    }
                });

                return res.status(200).json(bars);
            })
            .error(err => console.error(err));
    })
    .post('/locals/:location', (req, res) => {

    })
    .put('/locals/:location', (req, res) => {

    })
    .delete('/locals/:location', (req, res) => {

    });







module.exports = router;