const express = require('express')
const { RegisterPage, RegisterUser } = require('../../controllers/registerController')
const router = express.Router()


router.get('/', RegisterPage)
router.post('/', RegisterUser)

module.exports = router