// require Json web token
const jwt = require('jsonwebtoken');
// Require the db connection
const db = require('../config/dbconnection')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        // Check for token
        if (!token)
            return res.status(401).send({ msg: 'No Token, authorization denied' });

        const decoded = await jwt.verify(token, 'mysecretkey');

        // Add User from payload
        await db.query('select * from user where id=?', decoded.id, (err, data) => {
            //Check for user
            if (!data) {
                return res.status(401).send({ msg: 'authorization denied' });
            }
            // Create user
            req.user = data[0];
            next();
        });
    } catch (error) {
        return res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = isAuth;