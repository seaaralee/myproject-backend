const express = require('express');
const router = express.Router();
const { readCuti, readCutibyId, createCuti, updateCuti, deleteCuti } = require('../controller/cuti_controller');


// READ API
router.get('/', readCuti)

// READ API BY ID
router.get('/:id', readCutibyId)

// CREATE API
router.post('/', createCuti)

// UPDATE API
router.put('/:id', updateCuti)

// DELETE API
router.delete('/:id', deleteCuti)

module.exports = router;