const express = require('express');
const certificadoOtorgado = require('../controllers/certificadoOtorgadoController');
const validator = require('../middleware/validator/certificadoOtorgadoValidator');
const handleError = require('../helpers/handleError');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Certificado Otorgado:
 *          type: object
 *          properties:
 *              nro_documento:
 *                  type: string
 *                  description: documento de la persona
 *              apellido:
 *                  type: string
 *                  description: apellido de la persona
 *              nombres:
 *                  type: string
 *                  description: nombre de la persona
 *              nro_solicitud:
 *                  type: string
 *                  description: numero de la solicitud
 *              certificado_nombre:
 *                  type: string
 *                  description: nombre del certificado
 *              fecha_egreso:
 *                  type: string
 *                  description: fecha de egreso
 *              promedio:
 *                  type: string
 *                  description: promedio
 *              promedio_sin_aplazos:
 *                  type: string
 *                  description: promedio sin aplazo
 *              plan_codigo:
 *                  type: string
 *                  description: codigo del plan
 *              plan_nombre:
 *                  type: string
 *                  description: nombre del plan
 *              version_nombre:
 *                  type: string
 *                  description: version del plan
 *          required:
 *              - nro_solicitud
 *          example:
 *              nro_solicitud: 1
 */
    
/**
* @swagger
* /api/certificado_otorgado:
*   get:
*       summary: return all Certificado Otorgado
*       tags: [Certificado Otorgado]
*       responses:
*           200:
*               description: all Certificado Otorgado
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Certificado Otorgado'
*/
router.get('/certificado_otorgado', async (req, res) => {
    try {
        res.json( await certificadoOtorgado.getCertificadosOtorgados(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


/**
* @swagger
* /api/certificado_otorgado/{id}:
*   get:
*       summary: return a Certificado Otorgado
*       tags: [Certificado Otorgado]
*       parameters:
*           - name: id
*             description: id del Certificado Otorgado
*             type: string
*             in: path
*             required: true
*       responses:
*           200:
*               description: a Certificado Otorgado
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Certificado Otorgado'
*           400:
*               description: Certificado Otorgado no existe
*/
router.get('/certificado_otorgado/:id', validator.validateGet, async (req, res) => {
    try {
        res.json(await certificadoOtorgado.getCertificadoOtorgado(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


/**
* @swagger
* /api/certificado_otorgado/documento/{id}:
*   get:
*       summary: return a Certificado Otorgado
*       tags: [Certificado Otorgado]
*       parameters:
*           - name: id
*             description: Numero de Documento de la persona
*             type: string
*             in: path
*             required: true
*       responses:
*           200:
*               description: a Certificado Otorgado
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Certificado Otorgado'
*           400:
*               description: Certificado Otorgado no existe
*/
router.get('/certificado_otorgado/documento/:id', validator.validateGet, async (req, res) => {
    try {
        res.json(await certificadoOtorgado.getCertificadoOtorgadoDocumento(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


module.exports = router;