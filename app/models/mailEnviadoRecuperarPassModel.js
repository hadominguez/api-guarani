const db = require('../db');

const getMailsEnviados = async(req, res) => {
    query ={
        text: 'SELECT id, persona, mail, token, fecha, enviado FROM negocio.unpaz_mail_enviado_recuperar_pass;',
        values : []
    };
    return await db.consulta(req, res, query);
}

const getMailsEnviadosPersona = async(req, res, persona) => {
    query ={
        text: 'SELECT id, persona, mail, token, fecha, enviado FROM negocio.unpaz_mail_enviado_recuperar_pass WHERE persona = $1;',
        values : [persona]
    };
    return await db.consulta(req, res, query);
}

module.exports = {
    getMailsEnviados,
    getMailsEnviadosPersona
  }