var bodyParser = require('body-parser');
var jwt = require('../middleware/jwt');
// ===================================PAYMENT==========================================
var payRoute = require('express').Router(); // get an instance of the express Router
payRoute.use(jwt.verify);
payRoute.use(bodyParser.urlencoded({
    extended: true
}));
payRoute.use(bodyParser.json());
payRoute.get('/test', function (req, res) {
    res.json({
        "msg": "You can pay"
    });
});
payRoute.post('/pay', function (req, res) {
    var body = req.body;
    res.json({
        "msg": "payment successful"
    });
});
module.exports = {
    payRoute
};