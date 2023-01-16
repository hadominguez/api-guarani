const handleError = require('../helpers/handleError');
const responsableAcademica = require('../models/responsableAcademicaModel');

const getResponsablesAcademica = async(req, res) => {
    try {
        return await responsableAcademica.getResponsablesAcademica(req, res);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const getResponsableAcademica = async(req, res) => {
    try {
        const {id} = req.params;
        return await responsableAcademica.getResponsableAcademica(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};

module.exports = {
    getResponsablesAcademica,
    getResponsableAcademica
};