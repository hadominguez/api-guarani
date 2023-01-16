const db = require('../db');

const getCertificadosOtorgados = async(req, res) => {
    query ={
        text: `
        SELECT DISTINCT vw_personas.nro_documento,
        vw_personas.apellido,
        vw_personas.nombres,
        sga_certificados_otorg.nro_solicitud,
        sga_certificados.nombre as certificado_nombre,
        sga_certificados_otorg.fecha_egreso,
        sga_certificados_otorg.promedio,
        sga_certificados_otorg.promedio_sin_aplazos,
        vw_planes.plan_codigo,
        vw_planes.plan_nombre,
        vw_planes.version_nombre

        FROM negocio.vw_personas
        JOIN negocio.sga_certificados_otorg ON (vw_personas.persona = sga_certificados_otorg.persona)
        JOIN negocio.sga_certificados ON (sga_certificados_otorg.certificado = sga_certificados.certificado)
        JOIN negocio.vw_planes ON (sga_certificados_otorg.plan_version = vw_planes.plan_version) ;
        `,
        values : []
    };
    return await db.consulta(req, res, query);
}

const getCertificadoOtorgado = async(req, res, nro_solicitud) => {
    query ={
        text: `
            SELECT DISTINCT vw_personas.nro_documento,
            vw_personas.apellido,
            vw_personas.nombres,
            sga_certificados_otorg.nro_solicitud,
            sga_certificados.nombre as certificado_nombre,
            sga_certificados_otorg.fecha_egreso,
            sga_certificados_otorg.promedio,
            sga_certificados_otorg.promedio_sin_aplazos,
            vw_planes.plan_codigo,
            vw_planes.plan_nombre,
            vw_planes.version_nombre

            FROM negocio.vw_personas
            JOIN negocio.sga_certificados_otorg ON (vw_personas.persona = sga_certificados_otorg.persona)
            JOIN negocio.sga_certificados ON (sga_certificados_otorg.certificado = sga_certificados.certificado)
            JOIN negocio.vw_planes ON (sga_certificados_otorg.plan_version = vw_planes.plan_version)
            where nro_solicitud = $1;
        `,
        values : [nro_solicitud]
    };
    return await db.consulta(req, res, query);
}

const getCertificadoOtorgadoDocumento = async(req, res, nro_documento) => {
    query ={
        text: `
            SELECT DISTINCT vw_personas.nro_documento,
            vw_personas.apellido,
            vw_personas.nombres,
            sga_certificados_otorg.nro_solicitud,
            sga_certificados.nombre as certificado_nombre,
            sga_certificados_otorg.fecha_egreso,
            sga_certificados_otorg.promedio,
            sga_certificados_otorg.promedio_sin_aplazos,
            vw_planes.plan_codigo,
            vw_planes.plan_nombre,
            vw_planes.version_nombre

            FROM negocio.vw_personas
            JOIN negocio.sga_certificados_otorg ON (vw_personas.persona = sga_certificados_otorg.persona)
            JOIN negocio.sga_certificados ON (sga_certificados_otorg.certificado = sga_certificados.certificado)
            JOIN negocio.vw_planes ON (sga_certificados_otorg.plan_version = vw_planes.plan_version)
            where nro_documento IN ( $1 );
        `,
        values : [nro_documento]
    };
    return await db.consulta(req, res, query);
}

module.exports = {
    getCertificadosOtorgados,
    getCertificadoOtorgado,
    getCertificadoOtorgadoDocumento
  }