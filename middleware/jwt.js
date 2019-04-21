const jwt = require('jsonwebtoken');
let JWTOPTIONS = require('../JSON/token.json');
// use 'utf8' to get string instead of byte array  (512 bit key)
var Secret = Buffer.from("abcdefghijklmnopqrstuvwxyz", 'base64');

module.exports = {
    sign: (payload, $Options) => {
        /*
         sOptions = {
          issuer: "Authorizaxtion/Resource/This server",
          subject: "iam@user.me", 
          audience: "Client_Identity" // this should be provided by client
         }
        */
        // Token signing options
        var signOptions = {
            issuer: JWTOPTIONS.issuer,
            subject: JWTOPTIONS.subject,
            audience: JWTOPTIONS.audience,
            expiresIn: JWTOPTIONS.expiresIn, // 30 days validity
            algorithm: JWTOPTIONS.algorithm
        };
        return jwt.sign(payload, Secret, signOptions);
    },
    verify: (req, res, next) => {
        if (req.originalUrl === '/api')
            return next();
        // decode token
        if (req.headers['authorization']) {
            var token = req.headers['authorization'].split(' ')[1];

            var verifyOptions = {
                ignoreExpiration: false,
                algorithm: JWTOPTIONS.algorithm
            };
            try {
                jwt.verify(token, Secret, verifyOptions, function (err, decoded) {

                    if (err) {
                        return res.status(401).send({
                            success: false,
                            message: 'You shall not pass'
                        });
                    } else {
                        next();
                    }
                });
            } catch (err) {
                return res.status(401).send({
                    success: false,
                    message: 'You shall not pass'
                });
            }
        } else {
            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'You shall not pass'
            });

        }
    },
    decode: (token) => {
        return jwt.decode(token, {
            complete: true
        });
        //returns null if token is invalid
    }
}