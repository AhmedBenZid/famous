const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const isAgent = require('../middelware/isAgent');

//-- Add image--//

//Method Post
//path /album/add
//Priate

router.post('/add', isAgent, async (req, res) => {
    const { imgUrl, title, category } = req.body;
    try {
        db.query('insert into album (imgUrl,title,category)values(?,?,?);', [imgUrl, title, category], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'image ajouter avec succes' });
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//Method get
//path /album/all
//public

router.get('/all', async (req, res) => {
    try {
        db.query('select * from album', (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'data fitched' }, data);
        });
    }
    catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }

});

//Method delete
//path /album/id
//private

router.delete('/:id', isAgent, async (req, res) => {
    try {
        db.query('delete from album where id=?', req.params.id, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'image supprime' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
})
