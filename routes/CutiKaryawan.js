const express = require('express');
const router = express.Router();
const { readCuti, readCutibyId, createCuti } = require('../controller/cuti_controller');


// READ API
router.get('/', readCuti)

// READ API BY ID
router.get('/:id', readCutibyId)

// CREATE API
router.post('/', createCuti)

module.exports = router;