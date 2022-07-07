const db = require('../../db/db');
const mysql = require('mysql')

const getMaterials = require('express').Router()
getMaterials.get('/get-user',(req,res)=>{
    const sql = 'SELECT * FROM tisk';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

module.exports = getMaterials
