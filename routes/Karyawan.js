const express = require('express');
const router = express.Router();
const { readAPI, readAPIbyId, createAPI, updateAPI, deleteAPI } = require('../controller/karyawan_controller');


// READ API
router.get('/', readAPI)

// READ API BY ID
router.get('/:id', readAPIbyId)

// CREATE API
router.post('/', createAPI)

// UPDATE API
router.put('/:id', updateAPI)

// DELETE API
router.delete('/:id', deleteAPI)

module.exports = router;

// o p t i o n . c o d e . 2

// // SHOW ALL DATA
// router.get('/', async (req, res) => {
//     try {
//         const karyawan = await Karyawan.find();
//         res.json(karyawan);
//     } catch(err) {
//         res.json({ message: err});
//     }
// });


// // POST AN DATA
// router.post('/', async (req, res) => {
//     const kary = new Karyawan({
//         user_id: req.body.user_id,
//         fullname: req.body.fullname,
//         status_pernikahan: req.body.status
//     });
//     try {
//         const savedData = await kary.save();
//         res.json(savedData);
//     } catch(err) {
//         res.json({ message: err});
//     }
// });

// // FIND SPECIFIC DATA
// router.get('/:karyawanId', async (req, res) => {
//     try {
//         const kary = await Karyawan.findById(req.params.karyawanId);
//         res.json(kary);
//     } catch(err) {
//         res.json({ message: err});
//     }
// });

// // DELETE AN DATA
// router.delete('/:karyawanId', async (req, res) => {
//     try {
//         const removeData = await Karyawan.remove({_id: req.params.karyawanId})
//         res.json(removeData);
//     } catch(err) {
//         res.json({ message: err});
//     }
// });

// // UPDATE AN DATA
// router.patch('/:karyawanId', async (req, res) => {
//     try {
//         const updateData = await Karyawan.updateOne({_id: req.params.karyawanId}, { $set: {user_id}});
//         res.json(updateData);
//     } catch(err) {
//         res.json({ message: err});
//     }
// });

// module.exports = router;