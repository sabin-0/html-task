const users = require('../db/models/users');
let success_function = require("./response-handler.js").success_function;
let error_function = require("./response-handler.js").error_function;


function check_login(req,res,next) {
    let token = req.headers['authorization'].split(' ')[1];
    console.log("token : ", token);
}

module.exports = {
    check_login
}