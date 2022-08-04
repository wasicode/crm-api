const router = require('express').Router();
const userController = require('../controller/UserController')

//insert category
router.post("/login/merchant-qc",  userController.userLogin)
router.post("/create/merchant-qc",  userController.add_user)

module.exports = router;