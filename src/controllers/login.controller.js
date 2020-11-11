// Modules
const router = require("../routes");
const Authorize = require('../functions/auth');

// DB connection
const pool = require('../database/db_connect');
const { response } = require("express");


const onLogin = async(req, res) => {

    try{

        let authorization = req.headers.authorization;
        //  console.log(authorization)
        let userpass = authorization.split(' ')[1];
        //let decodedAuth = ecrypt.decryptor(userpass);
        let plainText = Buffer.from(userpass, 'base64').toString('ascii');

        // Credentials
        let req_username = plainText.split(':')[0]; // Username filled by user

        //Authorize
        let auth = await Authorize(req);
        if(!auth.isAuthorized){
            res.status(401).send({success: false, message: auth.message });
            return false;
        }

        const request = await pool.query(`SELECT U.usuarioid, 
        P.descripcion, U.nombre, M.descripcion FROM usuario as U
        JOIN usuarioperfil as UP on U.usuarioid = UP.usuarioid
        JOIN perfil as P on UP.PerfilId = P.perfilid
        JOIN ModuloPerfil as MP on MP.perfilId = P.perfilId
        JOIN Modulo as M on MP.moduloId = M.moduloId
        where u.usuario = '${req_username}'`);

        let response = {
            success: true,
            items: request.rows,
            message: 'TodoOK'
        }

        res.send(response);

    } catch(error){
        console.log("ERROR")
        res.status(401).send({success: false, message: error.toString() });
    }

};

module.exports = {
    onLogin
};