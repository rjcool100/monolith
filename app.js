
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var jwt=require('./middleware/jwt');
var validator=require('./middleware/validator');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(jwt.verify);
router.use(validator.validate);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    var body=req.body;
    res.json(body);   
});

router.post('/', function(req, res) {
    var body=req.body;
    res.json(body);   
});



app.use('/api', router);

module.exports={app};

