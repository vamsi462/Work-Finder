const express = require('express')
const { signup, signin ,signout} = require('../controllers/auth')
const router = express.Router()
const {userSignUpValidator} = require('../validator');


router.post('/signup', signup, userSignUpValidator)
router.post("/signin", signin);
router.get("/signout", signout);


module.exports= router;
