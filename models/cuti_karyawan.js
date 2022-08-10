const mongoose = require('mongoose');

const cutiSchema = new mongoose.Schema({
    nama_karyawan: {
        type: String
    },
    tanggal: {
        type: String
    },
    keterangan: {
        type: String
    },
})

module.exports = mongoose.model('Cuti', cutiSchema);