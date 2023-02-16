const handleError = require('../helpers/handleError');
const mailEnviado = require('../models/mailEnviadoRecuperarPassModel');

const getMailsEnviados = async(req, res) => {
    try {
        return await mailEnviado.getMailsEnviados(req, res);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const getMailsEnviadosPersona = async(req, res) => {
    try {
        const {persona} = req.params;
        return await mailEnviado.getMailsEnviadosPersona(req, res, persona);
    } catch (err) {
        handleError.error(req, res, err);
    }
};

module.exports = {
    getMailsEnviados,
    getMailsEnviadosPersona
};