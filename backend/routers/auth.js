const express = require('express')
const { signup, signin } = require('../controllers/auth')
const router = express.Router()
const {userSignUpValidator} = require('../validator');


router.post('/signup', signup, userSignUpValidator)
router.post("/signin", signin);

module.exports= router;
