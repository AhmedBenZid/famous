const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const bcryte = require('bcryptjs');
const jwt = require("jsonwebtoken");
const isAuth = require('../middelware/isAuth');
const isAgent = require('../middelware/isAgent');
const isAdmin = require('../middelware/isAdmin');
const gravatar = require('gravatar');
const request= require('request'); 
// 

// Path /users/register
// Methode Post
// Public

router.post("/register", async (req, res) => {

    const { firstName, lastName, adresse, tel } = req.body;
    try {
        let email = req.body.email.toLowerCase();
        await db.query("select email from user where email=?", [email], async (err, data) => {
            if (err) {
                console.error(err);
            } else if (data.length > 0) {
                return res.status(400).send({ errors: [{ msg: 'User already exists' }] });
            };
            const avatar = gravatar.url(email, { s: '200', r: 'jpg', d: 'mm' },true);
            let password = req.body.password;

            const salt = await bcryte.genSalt(10);
            password = await bcryte.hash(password, salt);
            let user = ([
                firstName, lastName, email, password, adresse, tel, avatar
            ]);

            await db.query("insert into user (firstName ,lastName, email, password,address,tel,avatar) values (?,?,?,?,?,?,?)",
                user, (err, data) => {
                    if (err) throw err;
                    res.status(200).json({ msg: "User registred...." });
                });
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
        await db.query('select * from user where role !=?', ["admin"], (err, data) => {
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
        await db.query('select * from user where id =?', [id], (err, data) => {
            if (err) throw err;
            const user = data[0]
            res.status(200).send({ msg: "User info....", user })
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
        else {
            await db.query("SELECT * FROM user WHERE email=?", [email], async (err, data) => {
                if (!data || !(await bcryte.compare(password, data[0].password))) {
                    return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] })
                }
                else {
                    const id = data[0].id;
                    const token = jwt.sign({ id }, 'mysecretkey', {
                        expiresIn: '1d'
                    });
                    const user = data[0]
                    res.status(200).send({ msg: "Login user....", user, token })
                }

            });
        }
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//path /users/updateuser
//method put
//@public

router.put('/updateuser/:userId', isAuth, async (req, res) => {
    const { firstName, lastName, adresse, tel } = req.body
    const arr = [firstName, lastName, adresse, tel, req.params.userId];
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
router.delete('/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        db.query('delete from user where id =?', [id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: "User deleted...." })
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error);
    }
});

//path /users/addagent
//method put
//@public

router.post("/addagent", isAdmin, async (req, res) => {

    try {
        let email = req.body.email.toLowerCase();
        await db.query("select email from user where email=?", [email], async (err, data) => {
            if (err) {
                console.error(err);
            } else if (data.length > 0) {
                return res.status(400).send({ errors: [{ msg: 'Agent already exists' }] });
            };
            let password = req.body.password;

            const salt = await bcryte.genSalt(10);
            password = await bcryte.hash(password, salt);
            let agent = ([email, password]);

            await db.query("insert into user (email,password,role) values (?,?,'agent')",
                agent, (err, data) => {
                    if (err) throw err;
                    res.status(200).json({ msg: "Agent Added....", agent });
                });
        });

    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

module.exports = router;