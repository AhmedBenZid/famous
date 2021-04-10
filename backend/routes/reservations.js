const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const isAuth = require('../middelware/isAuth');
const isAgent = require('../middelware/isAgent');

//-- Add reservation --//
// Path reservations/reservepack
// methode Post
//private
router.post('/reservepack', isAuth, async (req, res) => {
    const { dateReservation, packId } = req.body;
    const clientId = req.user.id
    try {
        const arr = [dateReservation, clientId, packId];
        await db.query('insert into reservations (dateReservation,status,clientId,packId)values(?,"Pending",?,?)', arr, (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Reservation Done with status Pending', arr });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//-- Get Client reservation --//
// Path reservations/myreserv
// methode get
//private
router.get('/myreserv', isAuth, async (req, res) => {
    try {
        await db.query('select * from reservations where clientId=?', [req.user.id], (err, data) => {
            if (data.length === 0) {
                return res.status(402).send({ msg: 'You dont have areservations yet...' });
            }
            else {
                return res.status(200).send({ msg: 'there is your reservations:', data });
            }
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//-- Get all reservations --//
// Path reservations/allreserv
// methode get
//private Agent & Admin
router.get('/allreserv', isAgent, async (req, res) => {
    try {
        await db.query(
            'SELECT user.email, reservations.* FROM reservations join user on reservations.clientId=user.id order by dateReservation;'
            , (err, data) => {
                if (data.length === 0) {
                    return res.status(402).send({ msg: 'There is no reservations yet...' });
                }
                else {
                    return res.status(200).send({ msg: 'there is the reservations:', data });
                }
            })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});



//-- Update reservation status --//
// Path reservations/status
// methode put
//private Agent & Admin
router.put('/status', isAgent, async (req, res) => {
    const { status, id } = req.body;
    try {
        await db.query('update reservations set status=? where id=?', [status, id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Status Updated...' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

//-- Update reservation Date --//
// Path reservations/date
// methode put
//user
router.put('/status', isAuth, async (req, res) => {
    const { id, dateReservation } = req.body;
    try {
        await db.query('update reservations set status=? where id=? and clienId=?', [id, dateReservation, req.user.id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Date Updated...' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});



//-- Delete reservation status --//
// Path reservations/delres
// methode put
//private Agent & Admin
router.delete('/delres', isAgent, async (req, res) => {
    const { id } = req.body;
    try {
        await db.query('delete from reservations where id=?', [id], (err, data) => {
            if (err) throw err;
            res.status(200).send({ msg: 'Reservation Deleted...' });
        })
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
    }
});

module.exports = router;