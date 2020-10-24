const User = require("../models/user");
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const errorHandler = require('../helpers/dbErrorHandlers');
const JWT_SECRET = 'efdfslkflkasdfn';

exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);

    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err),
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user,
        });
    });
};

exports.signin = (req, res) => {
    //find the user based on email. 
    const {
        email,
        password
    } = req.body;

    User.findOne({
        email
    }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with this email does not exist.please signup'
            })
        }
        //if user is found check email,password

        //create auth method user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'email and password did not match '
            })
        }

        //generate a signed token with user id and secret 

        const token = jwt.sign({
            _id: user._id
        }, JWT_SECRET)

        //persist the token as 't' in cookie with expiry date   
        res.cookie('t', token, {
            expire: new Date() + 9999
        });

        //return response with user and token to frontend client
        const {
            _id,
            name,
            email,
            role
        } = user;

        return res.json({
            token,
            user: {
                _id,
                email,
                name,
                role
            }
        })
    })

}
