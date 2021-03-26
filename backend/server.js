const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const ports = process.env.PORT || 3000;

const db = require("./config/dbconnection");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
})

app.use('/users', require("./routes/auth"));




app.listen(ports, () => console.log(`Server running on Port ${ports}`))