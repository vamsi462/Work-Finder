const express = require('express')
const { signup } = require('../controllers/auth')
const router = express.Router()
const {userSignUpValidator} = require('../validator');


router.post('/signup', signup, userSignUpValidator)

module.exports= router;
