const express = require('express')
const router = express.Router()

const sideController = require('../app/controllers/SideController')

// newsController.index

router.get('/search', sideController.search)
router.get('/', sideController.home)

module.exports = router