var bodyParser = require('body-parser');
var jwt = require('../middleware/jwt');

// ===================================user==========================================
var userRoute = require('express').Router(); // get an instance of the express Router
userRoute.use(bodyParser.urlencoded({
    extended: true
}));
userRoute.use(bodyParser.json());
userRoute.post('/signin', function (req, res) {
    var body = req.body;
    if (body.username === "admin" && body.password === "admin") {
        var token = jwt.sign({
            body
        })
        res.json({
            "status": "success",
            token
        });
    } else {
        res.json({
            "status": "failure",
            "msg": "wrong username of password"
        });
    }
});

module.exports = {
    userRoute
};