const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then((message) => {
            console.log("Database connection established");
        })
        .catch((error) => {
            console.log("Database not connected : ", error);
        })
}

module.exports = connect;//Default export in commonjs module system