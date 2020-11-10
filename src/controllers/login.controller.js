// Modules
const router = require("../routes");
const Authorize = require('../functions/auth');

// DB connection
const pool = require('../database/db_connect');
const { response } = require("express");


const onLogin = async(req, res) => {

    try{

        //Authorize
        let auth = await Authorize(req);
        if(!auth.isAuthorized){
            res.status(401).send({success: false, message: auth.message });
            return false;
        }

        const request = await pool.query('SELECT * FROM Usuario');

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