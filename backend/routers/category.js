const express = require('express')
const {
    requireSignin,
    isAuth,
    isAdmin
} = require('../controllers/auth')
// const { create } = require('../controllers/work')
const { userById } = require('../controllers/user')
const { categoryById, create, read, update ,remove, list } = require('../controllers/category')
const router = express.Router()



router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create)
router.get('/category/:categoryId', read)
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update)
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove)
router.get('/categories', list)

router.param('categoryId', categoryById)
router.param('userId', userById)



module.exports = router