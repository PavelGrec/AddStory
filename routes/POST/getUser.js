const db = require('../../db/db');
const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json({extended:false}))
app.use(cors({origin:'http://localhost:3000'}))
var mysql= require('mysql');




const saveMaterials = require('express').Router()
saveMaterials.post('/getUser',(req,res) => {
    

    const sql = `SELECT * FROM tisk WHERE title= "${req.body.title}" AND body = "${req.body.body}"`;
    db.query(sql,(err,result)=>{
        if(err)throw err;
        // console.log(obj);
        res.send(result)
    })
 })
 module.exports = saveMaterials