const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connect = require('./db/config');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


app.use(express.static(__dirname + '/../client'));

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(authRoutes);
app.use(userRoutes);
//Database connection
connect();
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});