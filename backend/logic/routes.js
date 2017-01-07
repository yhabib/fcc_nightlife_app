const express = require('express'),
    router = express.Router(),
    controller = require('./controller'),
    interface = require('./../models/interface');


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

        interface.getClubsByLocation(location, (err, docs) => {
            if(err) throw err;
            
            let localBars = {};
            docs.forEach(doc => localBars[doc._id] = doc.visitorsCount);

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
                            region: bar.location.city,
                            id: bar.id,
                            attending: localBars[bar.id] || 0
                        }
                    });

                    return res.status(200).json(bars);
                })
                .error(err => console.error(err));
        });
    })
    .post('/locals/:location', (req, res) => {
        let id = req.body.id,
            region = req.body.region;
        
        interface.saveLocal(id, region, err => {
            if(err) throw err;
            else res.sendStatus(200);
        });
    })
    .put('/locals/:location', (req, res) => {
        let id = req.body.id,
            op = req.body.op;
        
        if(op === 'add')
            interface.addVisitorToLocal(id, err => {
                if(err) throw err;
                console.log("Added");                
                res.sendStatus(200);
            });
        else   
            interface.removeVisitorFromLocal(id, err => {
                if(err) throw err;
                console.log("Removed");                
                res.sendStatus(200);
            });

    })
    .delete('/locals/:location', (req, res) => {
        let id = req.body.id;

        interface.removeLocal(id, err => {
            if(err) throw err;
            else res.sendStatus(200);
        });
    });







module.exports = router;