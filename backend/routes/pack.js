const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const isAgent = require('../middelware/isAgent');

//--Add NewPack--//
//Path /packs/addpack
//Methode Post
//Private Agent & Admin
router.post('/addpack', isAgent, async (req, res) => {
    const { label, description, price, materials, imgUrl } = req.body;
    try {
        const newPack = [label, description, price, materials, imgUrl];
        await db.query('insert into packs (label,description,price,materials,imgUrl) values (?,?,?,?,?)', newPack, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Pack Added Successfully...', newPack });
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//--get allPack--//
//Path /packs/allpacks
//Methode get
//Public
router.get('/allpacks', async (req, res) => {
    try {
        await db.query('select * from packs', (err, data) => {
            if (data.length === 0) {
                return res.status(401).send({ msg: 'there is no packs yet' })
            }
            else { return res.status(200).send({ msg: 'Data fetchet...', data }); }
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//--get Pack--//
//Path /packs/pack
//Methode get
//Public
router.get('/pack', async (req, res) => {
    const { id } = req.body
    try {
        await db.query('select * from packs where id=?', [id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Data fetchet...', data });
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//--Update existant Pack--//
//Path /packs/editpack
//Methode Put
//Private Agent & Admin
router.put('/editpack', isAgent, async (req, res) => {
    const { label, description, price, materials, imgUrl, id } = req.body;
    try {
        const editedpack = [label, description, price, materials, imgUrl, id];
        await db.query('update packs set label=?,description=?,price=?,materials=?,imgUrl=? where id=?', editedpack, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Pack Updated Successfully...', editedpack });
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//--get allPack--//
//Path /packs/delpack
//Methode delete
//Private Agent & Admin
router.delete('/delpack', isAgent, async (req, res) => {
    const { id } = req.body
    try {
        await db.query('delete from packs where id=?', [id], (err, data) => {
            if (err) throw err
            res.status(200).send({ msg: 'Data deleted...' });
        });
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

module.exports = router;