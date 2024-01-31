const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;



async function createUser(req, res) {
    try {
        let datas = req.body;
        
        //validate
        let userFound = await users.findOne({email : datas.email});

        if(userFound) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Save to Database
        let new_user = await users.create(datas);

        if (new_user) {
            console.log("new_user : ", new_user);
            let response = success_function({
                statusCode : 201,
                data : new_user,
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

// async function getUserData(req, res) {
//     try {
//         const userId = req.params.userId; 

//         const userData = await users.findById(userId); 

//         if (userData) {
//             res.status(200).json(userData);
//             return;
//         } else {
//             res.status(404).send('User not found');
//             return;
//         }
//     } catch (error) {
//         console.error("Error: ", error);
//         res.status(500).send("Internal Server Error");
//         return;
//     }
// }


// async function updateUser(req, res) {
//     try {
//         const userId = req.params.userId;

//         const updatedData = req.body;

//         const updatedUser = await users.findByIdAndUpdate(userId, updatedData, { new: true });

//         if (updatedUser) {
//             res.status(200).json(updatedUser);
//             return;
//         } else {
//             res.status(404).send('User not found');
//             return;
//         }
//     } catch (error) {
//         console.error("Error: ", error);
//         res.status(500).send("Internal Server Error");
//         return;
//     }
// }


// async function deleteUser(req, res) {
//     try {
//         const userId = req.params.userId;
//         const deletedUser = await users.findByIdAndDelete(userId);

//         if (deletedUser) {
//             res.status(200).send('User deleted successfully');
//             return;
//         } else {
//             res.status(404).send('User not found');
//             return;
//         }
//     } catch (error) {
//         console.error("Error: ", error);
//         res.status(500).send("Internal Server Error");
//         return;
//     }
// }


module.exports = {
    createUser
}