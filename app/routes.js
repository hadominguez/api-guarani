const proveedores = require('./routes/responsableAcademicaRoutes');
const certificadoOtorgado = require('./routes/certificadoOtorgadoRoutes');
const mailEnviado = require('./routes/mailEnviadoRecuperarPassRoutes');
const path = require('path');
const ConfigEnv = require('./config/config');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API-DOC SIU-Guarani",
            version: "1.0.0",
            description: "API for SIU-Guarani"
        },
        servers: [{
            url: 'http://'+ ConfigEnv.HTTP_HOST +':'+ ConfigEnv.HTTP_PORT 
        }]
    },
    apis: [`${path.join(__dirname,"./routes/*.js")}`],
};

module.exports = function (app){
    app.use("/api", proveedores, certificadoOtorgado, mailEnviado);
    app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
}