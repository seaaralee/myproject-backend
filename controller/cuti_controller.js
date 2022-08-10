require('dotenv').config();
const Cuti = require('../models/cuti_karyawan');
const Validator = require('fastest-validator');

const v = new Validator();

// READ
exports.readCuti = async (req,res) => {
    const cuti = await Cuti.find();
    return res.json(cuti);
}

exports.readCutibyId = async (req,res) => {
    const id = req.params.id;
    const cuti = await Cuti.findById(id);
    return res.json(cuti || {});
}

// CREATE
exports.createCuti = async (req,res) => {
    const schema = {
        nama_karyawan : 'string|optional',
        tanggal: 'string|optional',
        keterangan : 'string|optional'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }

    const cuti = await Cuti.create(req.body);
    
    res.json(cuti);
}