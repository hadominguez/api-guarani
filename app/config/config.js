require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const HTTP_HOST = process.env.HTTP_HOST;
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const LEVEL_LOG_FILE = process.env.LEVEL_LOG_FILE;
const LEVEL_LOG_CONSOLE = process.env.LEVEL_LOG_CONSOLE;
const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB;
const NAME_DB = process.env.NAME_DB;
const USER_DB = process.env.USER_DB;
const PASS_DB = process.env.PASS_DB;

module.exports = {
    HTTP_HOST, HTTP_PORT,
    LEVEL_LOG_FILE, LEVEL_LOG_CONSOLE,
    HOST_DB, PORT_DB, NAME_DB, USER_DB, PASS_DB
}