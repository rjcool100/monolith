var express = require('express'); // call express
var app = express(); // define our app using express

// ROUTES FOR OUR API
var {
    aboutRoute
} = require('./routes/about');
var {
    productRoute
} = require('./routes/products');
var {
    userRoute
} = require('./routes/user');
var {
    purchaseRoute
} = require('./routes/purchase');
var {
    payRoute
} = require('./routes/payment');

app.use('/info', aboutRoute);
app.use('/products', productRoute);
app.use('/user', userRoute);
app.use('/purchase', purchaseRoute);
app.use('/payment', payRoute);

module.exports = {
    app
};