const db = require('../db');

const getResponsablesAcademica = async(req, res) => {
    query ={
        text: 'SELECT responsable_academica, nombre FROM negocio.sga_responsables_academicas;',
        values : []
    };
    return await db.consulta(req, res, query);
}

const getResponsableAcademica = async(req, res, responsable_academica) => {
    query ={
        text: 'SELECT responsable_academica, nombre FROM negocio.sga_responsables_academicas WHERE responsable_academica = $1;',
        values : [responsable_academica]
    };
    return await db.consulta(req, res, query);
}

module.exports = {
    getResponsablesAcademica,
    getResponsableAcademica
  }