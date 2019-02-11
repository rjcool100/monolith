
// use 'utf8' to get string instead of byte array  (512 bit key)
const package_name='com.i2e1.swapp';

module.exports = {

    validate: (req, res, next) => {
      //valdiate headers
      return next();

    }
}
