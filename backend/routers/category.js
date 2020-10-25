const express = require('express')
const {
    requireSignin,
    isAuth,
    isAdmin
} = require('../controllers/auth')
// const { create } = require('../controllers/work')
const { userById, read } = require('../controllers/user')
const { categoryById, create } = require('../controllers/category')
const router = express.Router()



router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)
router.get('/category/:categoryId', read)


router.param('categoryId', categoryById)
router.param('userId', userById)



module.exports = router