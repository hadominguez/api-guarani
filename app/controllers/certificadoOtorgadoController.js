const handleError = require('../helpers/handleError');
const certificadoOtorgado = require('../models/certificadoOtorgadoModel');

const getCertificadosOtorgados = async(req, res) => {
    try {
        return await certificadoOtorgado.getCertificadosOtorgados(req, res);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const getCertificadoOtorgado = async(req, res) => {
    try {
        const {id} = req.params;
        return await certificadoOtorgado.getCertificadoOtorgado(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const getCertificadoOtorgadoDocumento = async(req, res) => {
    try {
        const {id} = req.params;
        return await certificadoOtorgado.getCertificadoOtorgadoDocumento(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};

module.exports = {
    getCertificadosOtorgados,
    getCertificadoOtorgado,
    getCertificadoOtorgadoDocumento
};