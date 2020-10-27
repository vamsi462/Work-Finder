const express = require("express");
const router = express.Router();

const {
    requireSignin,
    isAuth,
    isAdmin
} = require("../controllers/auth");
const {
    userById,
    addAcceptWorkToUserHistory
} = require("../controllers/user");

const { listAcceptWorks, acceptWorkById, getStatusValues, updateWorkStatus, create } = require("../controllers/acceptedWork");


router.post(
    "/acceptWork/create/:userId",
    requireSignin,
    isAuth,
    // addAcceptWorkToUserHistory,
    create
);

router.get("/acceptedWorks/list/:userId", requireSignin, isAuth,isAdmin,listAcceptWorks);
router.get(
    "/work/status-values/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    getStatusValues
);
router.put(
    "/work/:acceptWorkId/status/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateWorkStatus
);

router.param("userId", userById);
router.param("acceptWorkId", acceptWorkById);

module.exports = router;