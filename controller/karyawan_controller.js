require('dotenv').config();
const Karyawan = require('../models/karyawan');
const Validator = require('fastest-validator');

const v = new Validator();

exports.readAPI = async (req,res) => {
    const kary = await Karyawan.find();
    return res.json(kary);
}

exports.readAPIbyId = async (req,res) => {
    const id = req.params.id;
    const kary = await Karyawan.findById(id);
    return res.json(kary || {});
}

exports.createAPI = async (req,res) => {
    const schema = {
        user_id: 'string|optional',
        fullname: 'string|optional',
        statuspernikahan: 'string|optional',
        nik: 'string|optional',
        identitas: 'string|optional',
        divisi: 'string|optional',
        tanggalmasuk: 'string|optional',
        statuskaryawan: 'string|optional',
        email: 'string|optional',
        phone: 'string|optional',
        alamat: 'string|optional',
        posisi: 'string|optional',
        site: 'string|optional',
        telegram: 'string|optional',
        pendidikan: 'string|optional',
        institusi: 'string|optional',
        tempatlahir: 'string|optional',
        tanggallahir: 'string|optional',
        status : 'string|optional',
        role_trello : 'string|optional',
        nikkaryawan: 'string|optional',
        jurusan: 'string|optional'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }

    const kary = await Karyawan.create(req.body);
    
    res.json(kary);
}

exports.updateAPI = async (req,res) => {
    const id = req.params.id;

    let kary = await Karyawan.findByPk(id);

    if(!kary){
        return res.json({message: 'Data Not Found'});
    }

    const schema = {
        user_id: 'string|optional',
        fullname: 'string|optional',
        statuspernikahan: 'string|optional',
        nik: 'string|optional',
        identitas: 'string|optional',
        divisi: 'string|optional',
        tanggalmasuk: 'string|optional',
        statuskaryawan: 'string|optional',
        email: 'string|optional',
        phone: 'string|optional',
        alamat: 'string|optional',
        posisi: 'string|optional',
        site: 'string|optional',
        telegram: 'string|optional',
        pendidikan: 'string|optional',
        institusi: 'string|optional',
        tempatlahir: 'string|optional',
        tanggallahir: 'string|optional',
        status : 'string|optional',
        role_trello : 'string|optional',
        nikkaryawan: 'string|optional',
        jurusan: 'string|optional'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }

    kary = await kary.update(req.body);
    res.json(kary);
}

exports.deleteAPI = async (req,res) => {
    const id = req.params.id;

    const kary = await Karyawan.findById(id);

    if(!kary){
        return res.json({message: 'Product Not Found'});
    }

    await kary.remove();

    res.json({
        message: 'Data Deleted'
    });
}