// ===================================products==========================================
var productRoute = require('express').Router(); // get an instance of the express Router

productRoute.get('/product', function (req, res) {

    res.json({
        "productList": [{
            "id": "1",
            "type": "Home Electronics",
            "ProductName": "Lg 32 inch tv",
            "price": "INR 16,000"
        }, {
            "id": "1",
            "type": "Mobile",
            "ProductName": "Google Pixel 3 , 64 GB",
            "price": "INR 54,000"
        }, {
            "id": "1",
            "type": "Footwear",
            "ProductName": "Nike Flyknit",
            "price": "INR 12,000"
        }]
    });
});

module.exports = {
    productRoute
};