const { Pool } = require('pg');
const ConfigEnv = require('./config/config');
const logger = require('./utils/logger');
const handleError = require('./helpers/handleError');
const util = require('util');

const pool = new Pool({
    host: ConfigEnv.HOST_DB,
    port: ConfigEnv.PORT_DB,
    database: ConfigEnv.NAME_DB,
    user: ConfigEnv.USER_DB,
    password: ConfigEnv.PASS_DB,
});

const consulta = async(req, res, query) => {
    try {
        logger.info("QUERY: "+ util.inspect(query));
        datos = await pool.query(query);
        return datos.rows;
    } catch (err) {
        handleError.error(req, res, err);
        logger.error(err);
    }
}

module.exports = {
    pool, consulta
}