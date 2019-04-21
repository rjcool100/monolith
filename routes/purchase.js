var bodyParser = require('body-parser');
var jwt = require('../middleware/jwt');

// ===================================purchase==========================================
var purchaseRoute = require('express').Router(); // get an instance of the express Router
purchaseRoute.use(jwt.verify);
purchaseRoute.use(bodyParser.urlencoded({
    extended: true
}));
purchaseRoute.use(bodyParser.json());

purchaseRoute.post('/purchase', function (req, res) {
    var body = req.body;
    var header = req.headers['authorization'].split(' ')[1];
    console.log(jwt.decode(header));

    res.json({
        "msg": "purchase item"
    });
});

module.exports = {
    purchaseRoute
};