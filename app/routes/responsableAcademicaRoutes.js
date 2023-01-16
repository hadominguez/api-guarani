const express = require('express');
const responsableAcademica = require('../controllers/responsableAcademicaController');
const validator = require('../middleware/validator/responsableAcademicaValidator');
const handleError = require('../helpers/handleError');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Responsable Academica:
 *          type: object
 *          properties:
 *              responsable_academica:
 *                  type: integer
 *                  description: id de la Responsable Academica
 *              nombre:
 *                  type: string
 *                  description: nombre de la Responsable Academica
 *          required:
 *              - responsable_academica
 *              - nombre
 *          example:
 *              responsable_academica: 1
 *              nombre: Responsable Academica
 */
    
/**
* @swagger
* /api/responsable_academica:
*   get:
*       summary: return all Responsable Academica
*       tags: [Responsable Academica]
*       responses:
*           200:
*               description: all Responsable Academica
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Responsable Academica'
*/
router.get('/responsable_academica', async (req, res) => {
    try {
        res.json( await responsableAcademica.getResponsablesAcademica(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


/**
* @swagger
* /api/responsable_academica/{id}:
*   get:
*       summary: return a Responsable Academica
*       tags: [Responsable Academica]
*       parameters:
*           - name: id
*             description: id de la Responsable Academica
*             type: number
*             in: path
*             required: true
*       responses:
*           200:
*               description: a Responsable Academica
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Responsable Academica'
*           400:
*               description: Responsable Academica no existe
*/
router.get('/responsable_academica/:id', validator.validateGet, async (req, res) => {
    try {
        res.json(await responsableAcademica.getResponsableAcademica(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});



module.exports = router;