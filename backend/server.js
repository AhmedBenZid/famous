const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const ports = process.env.PORT || 5000;

const db = require("./config/dbconnection");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use the users Routes
app.use('/users', require("./routes/auth"));

//Use the Packs Routes
app.use('/packs', require("./routes/pack"));

//Use the Reservations Routes
app.use('/reservations', require("./routes/reservations"));

//Use the FAVORIS Routes
app.use('/favoris', require("./routes/wishList"));




app.listen(ports, () => console.log(`Server running on Port ${ports}`))