const express = require('express')
const router = express.Router()
const {
    requireSignin,
    isAdmin,
    isAuth
} = require('../controllers/auth')

const {userById} = require('../controllers/user');
const {
    create,
    read,
    update,
    remove,
    workById,
    list,
    listCategories,
    listBySearch,
    listSearch,
    listRelated,
    photo
} = require('../controllers/work');

router.get('/work/:workId', read)

router.post('/work/create/:userId', requireSignin, isAuth, isAdmin, create)
router.delete('/work/:workId/:userId',requireSignin, isAuth,isAdmin,remove)
router.put("/work/:workId/:userId", requireSignin, isAuth, isAdmin, update)
router.get('/works', list)
router.get('/works/search', listSearch)
router.get('/works/related/:productId', listRelated)
router.get('/works/categories', listCategories)
router.post('/works/by/search', listBySearch)
router.get('/work/photo/:workId', photo)



router.param('userId',userById)
router.param("workId", workById);


module.exports = router;