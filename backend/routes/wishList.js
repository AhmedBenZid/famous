const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const isAuth = require('../middelware/isAuth');

//-- Add to wish list--//

//Method Post
//path /favoris/add
//Priate
router.post('/add', isAuth, async (req, res) => {
    const { packId } = req.body;
    try {
        await db.query('insert into favoris (packId,clientId) values(?,?)', [packId, req.user.id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Pack Added to your wish List' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }

})

//Method get
//path /favoris/
//Priate
router.get('/', isAuth, async (req, res) => {
    try {
        await db.query('select * from favoris where clientID=? ', [req.user.id], (err, data) => {
            if (data.length < 0) {
                return res.send(300).send({ msg: "your wish List is empty" });
            };
            res.status(200).send({ msg: 'your wish List' }, data);
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//Method delete
//path /favoris/del
//Priate
router.delete('/del', isAuth, async (req, res) => {
    try {
        await db.query('delete from favoris where id=? ', [req.body.id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Pack deleted from your wish list' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
})




module.exports = router;