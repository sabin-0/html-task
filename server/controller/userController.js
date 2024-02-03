const users = require('../db/models/users');
let bcrypt = require('bcryptjs');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

//submit data

async function createUser(req, res) {
    try {
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.password;
        
        //validate
        let userFound = await users.findOne({email});

        if(userFound) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Hashing password
        let salt = await bcrypt.genSalt(10);
        console.log("salt : ", salt);

        let hashed_passed = bcrypt.hashSync(password, salt);
        console.log("hashed password : ", hashed_passed);

        //Save to Database
        let new_user = await users.create({
            firstname,
            lastname,
            email,
            password : hashed_passed,
        });

        if (new_user) {
            let response_datas = {
                _id : new_user.id,
                firstname : new_user.firstname,
                lastname : new_user.lastname,
                email : new_user.email,
            }
            console.log("new_user : ", new_user);
            let response = success_function({
                statusCode : 201,
                data : response_datas,
                message : "User created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "Something went wrong",
        })
        res.status(response.statusCode).send(response);
        return;
    }

}

//getdata

async function getUserData(req, res) {
    try {
        // Fetch all users from the database
        let allUsers = await users.find({});

        if (allUsers.length > 0) {
            // Users found, send success response
            let response = success_function({
                statusCode: 200,
                data: allUsers,
                message: "All users retrieved successfully",
            });
            res.status(response.statusCode).send(response);
        } else {
            // No users found, send appropriate response
            let response = error_function({
                statusCode: 404,
                message: "No users found",
            });
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        console.log("error : ", error);
        // Handle any unexpected errors
        let response = error_function({
            statusCode: 500,
            message: "Internal server error",
        });
        res.status(response.statusCode).send(response);
    }
}



module.exports = {
    createUser,
    getUserData
}