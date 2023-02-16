const express = require('express');
const mailEnviado = require('../controllers/mailEnviadoRecuperarPassController');
const validator = require('../middleware/validator/mailEnviadoRecuperarPassValidator');
const handleError = require('../helpers/handleError');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Mail Enviado:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: id del mail
 *              persona:
 *                  type: integer
 *                  description: id de la persona
 *              mail:
 *                  type: string
 *                  description: nombre de la Responsable Academica
 *              token:
 *                  type: string
 *                  description: nombre de la Responsable Academica
 *              fecha:
 *                  type: string
 *                  description: nombre de la Responsable Academica
 *              enviado:
 *                  type: boolean
 *                  description: nombre de la Responsable Academica
 *          required:
 *              - persona
 *          example:
 *              persona: 1
 */
    
/**
* @swagger
* /api/mail_enviado:
*   get:
*       summary: return all Mail Enviado
*       tags: [Mail Enviado]
*       responses:
*           200:
*               description: all Mail Enviado
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Mail Enviado'
*/
router.get('/mail_enviado', async (req, res) => {
    try {
        res.json( await mailEnviado.getMailsEnviados(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


/**
* @swagger
* /api/mail_enviado/{persona}:
*   get:
*       summary: return a Mail Enviado
*       tags: [Mail Enviado]
*       parameters:
*           - name: persona
*             description: id de la Mail Enviado
*             type: number
*             in: path
*             required: true
*       responses:
*           200:
*               description: a Mail Enviado
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Mail Enviado'
*           400:
*               description: Mail Enviado no existe
*/
router.get('/mail_enviado/:persona', validator.validateGet, async (req, res) => {
    try {
        res.json(await mailEnviado.getMailsEnviadosPersona(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});



module.exports = router;