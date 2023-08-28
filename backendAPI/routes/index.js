const express = require('express')
const router = express.Router()

require('./menuitems')(router)

module.exports = router