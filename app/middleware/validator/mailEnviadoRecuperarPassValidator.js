const validator = require('express-validator');
const handleValidator = require('../../helpers/handleValidator');

const validateGet = [
    validator.check('persona')
    .exists()
    .notEmpty()
    .isString(),
    (req, res, next) =>{
        handleValidator.validate(req, res, next)
    }
]

module.exports = {
    validateGet
}