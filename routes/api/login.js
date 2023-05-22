const express = require('express')
const { LoginPage, LoginUser } = require('../../controllers/loginController')
const router = express.Router()


router.get('/', LoginPage)
router.post('/', LoginUser)

module.exports = router