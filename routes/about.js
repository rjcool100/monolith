// ===================================about==========================================
var aboutRoute = require('express').Router(); // get an instance of the express Router

aboutRoute.get('/about', function (req, res) {

    res.json({
        "msg": "this is the about page"
    });
});

module.exports = {
    aboutRoute
};