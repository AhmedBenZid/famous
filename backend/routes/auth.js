const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const bcryte = require('bcryptjs');
const jwt = require("jsonwebtoken");
const isAuth = require('../middelware/isAuth');
const isAgent = require('../middelware/isAgent');
const isAdmin = require('../middelware/isAdmin');

// Path /users/register
// Methode Post
// Public

router.post("/register", async (req, res) => {

    const { firstName, lastName, adresse, tel } = req.body;
    try {
        let email = req.body.email.toLowerCase();
        await db.query("select email from user where email=?", [email], (err, data) => {
            if (err) {
                console.error(err);
            } else if (data.length > 0) {
                return res.status(400).send({ errors: [{ msg: 'User already exists' }] });
            };
        });
        let password = req.body.password;

        const salt = await bcryte.genSalt(10);
        password = await bcryte.hash(password, salt);
        let user = ([
            firstName, lastName, email, password, adresse, tel
        ]);

        await db.query("insert into user (firstName ,lastName, email, password,address,role) values (?,?,?,?,?,'user')",
            user, (err, data) => {
                if (err) throw err;
                res.status(200).json({ msg: "User registred...." });
            });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//path /users/
//method get
//@private Admin
router.get('/', isAdmin, async (req, res) => {
    try {
        await db.query('select * from user', (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: "Users list....", data })
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error);
    }
});
//path /users/me
//method get user by id
//@private
router.get('/me', isAuth, async (req, res) => {
    const id = req.user.id
    try {
        await db.query('select * from user where id =?', id, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: "User info....", data })
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error);
    }
});

//path /users/login
//method Post
//@public

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "Please provide an email or password" });
        }
        await db.query("SELECT * FROM user WHERE email=?", [email], async (err, data) => {
            if (!data || !(await bcryte.compare(password, data[0].password))) {
                res.status(401).json({ msg: 'Email or Password incorrect' })
            }
            else {
                const id = data[0].id;
                const token = jwt.sign({ id }, 'mysecretkey', {
                    expiresIn: '1d'
                });
                res.status(200).send({ msg: "Login user....", data, token })
            }
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//path /users/updateuser
//method put
//@public

router.put('/updateuser', isAuth, async (req, res) => {
    const { firstName, lastName, address, tel } = req.body
    const arr = [firstName, lastName, address, tel, req.user.id];
    try {
        await db.query('update user set firstName=?,lastName=?,address=?,tel=? where id=?', arr, (err, data) => {
            if (err) throw err;
            res.status(200).json({ msg: 'User Updated...' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//path /users/
//method delete
//@private
router.delete('/', isAdmin, async (req, res) => {
    const { id } = req.body;
    try {
        await db.query('delete from user where id =?', id, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: "User deleted...." })
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error);
    }
});

//path /users/updateuser
//method put
//@public

router.post("/addagent", isAdmin, async (req, res) => {

    try {
        let email = req.body.email.toLowerCase();
        await db.query("select email from user where email=?", [email], (err, data) => {
            if (err) {
                console.error(err);
            } else if (data.length > 0) {
                return res.status(400).send({ errors: [{ msg: 'Agent already exists' }] });
            };
        });
        let password = req.body.password;

        const salt = await bcryte.genSalt(10);
        password = await bcryte.hash(password, salt);
        let agent = ([email, password]);

        await db.query("insert into user (email,password,role) values (?,?,'agent')",
            agent, (err, data) => {
                if (err) throw err;
                res.status(200).json({ msg: "Agent Added....", agent });
            });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

module.exports = router;