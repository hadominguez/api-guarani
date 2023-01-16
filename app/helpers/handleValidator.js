const validator = require('express-validator');
const logger = require('../utils/logger');
const handleError = require('./handleError');
const util = require('util');

const validate = (req, res, next) => {
    try {
        validator.validationResult(req).throw();
        logger.warn( 'REQUEST: IP: '+ req.ip + ' - URL: '+ req.originalUrl);
        return next();
    } catch (err) {
        err.message = err.errors;
        handleError.error(req, res, err);
        logger.warn( 'REQUEST: IP: '+ req.ip + ' - URL: '+ req.originalUrl + ' - Message: '+ util.inspect(err.message));
    }
}


module.exports = {
    validate
}