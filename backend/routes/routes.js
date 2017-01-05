const express = require('express'),
      router = express.Router();



router
    .get('/', (req, res) => {
        const api = {
            "/bars?query": "Giving an valid Yelp location returns all the locals in your area",
            "/vote-up?query": "Post || Put: Giving the id of a bar -> name + location => stores this bar and adds a visitor",
            "/vote-down?query": "Put || Delete: Giving the id search this bar on the DB and after substracting a vistior if the count is cero deletes the bar frm the DB"
        }; 
        res.json(api);
    })
    .get('/locals:id', (req, res) => {
        const id = req.params.id;
         
        res.json("Getting /aapi");
    })
    .post('/going-to', (req, res) => {

    })
    .post('/not-going-to', (req, res) => {

    });







module.exports = router;