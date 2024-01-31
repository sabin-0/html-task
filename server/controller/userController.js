const users = require('../db/models/users');

async function createUser(req, res) {
    try {
        const datas = req.body;
        const new_user = await users.create(datas);

        if (new_user) {
            res.status(201).send("success");
            return;
        } else {
            res.status(400).send('failed');
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        res.status(400).send("failed");
        return;
    }

}

async function getUserData(req, res) {
    try {
        const userId = req.params.userId; 

        const userData = await users.findById(userId); 

        if (userData) {
            res.status(200).json(userData);
            return;
        } else {
            res.status(404).send('User not found');
            return;
        }
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Internal Server Error");
        return;
    }
}


async function updateUser(req, res) {
    try {
        const userId = req.params.userId;

        const updatedData = req.body;

        const updatedUser = await users.findByIdAndUpdate(userId, updatedData, { new: true });

        if (updatedUser) {
            res.status(200).json(updatedUser);
            return;
        } else {
            res.status(404).send('User not found');
            return;
        }
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Internal Server Error");
        return;
    }
}


async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        const deletedUser = await users.findByIdAndDelete(userId);

        if (deletedUser) {
            res.status(200).send('User deleted successfully');
            return;
        } else {
            res.status(404).send('User not found');
            return;
        }
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Internal Server Error");
        return;
    }
}


module.exports = {
    createUser,
    getUserData,
    updateUser,
    deleteUser,
}