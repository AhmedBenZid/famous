const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const bcryte = require('bcryptjs');
const jwt = require("jsonwebtoken")


// Path /users/register
// Methode Post
// Public

router.post("/register", async (req, res) => {

    const { firstName, lastName, adresse, tel } = req.body;
    try {
        let email = req.body.email.toLowerCase();
        db.checkUserEmail([email], (err, data) => {
            if (err) throw err;
            if (data.length) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            };
        })
        let password = req.body.password;

        const salt = await bcryte.genSalt(10);
        password = await bcryte.hash(password, salt);
        let user = ([
            firstName, lastName, email, password, adresse, tel
        ]);

        db.registerUser(user, (err, data) => {
            if (err) throw err;
            res.status(200).json({ msg: "User registred....", data })
        })

    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//path /users/
//method Post
//@public
router.get('/', async (req, res) => {
    try {
        const users = await db.getUser();
        res.status(200).send({ msg: "Users list....", users })

    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
})









module.exports = router;