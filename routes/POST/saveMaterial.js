const db = require('../../db/db');
const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json({extended:false}))
app.use(cors({origin:'http://localhost:3000'}))
var mysql= require('mysql');




const saveMaterials = require('express').Router()
saveMaterials.post('/save-materials',(req,res) => {
    
    const obj = req.body
    const sql = 'INSERT INTO tisk SET ?';
    db.query(sql,obj,(err,result)=>{
        if(err)throw err;
        console.log(obj);
        res.send('ok')
    })
 })
 module.exports = saveMaterials

//  app.post('/api/create', (req,res)=> {

//     const username = req.body.userName;
//     const title = req.body.title;
//     const text = req.body.text;
    
//     console.log(username,title,text)
    
//     db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//        if(err) {
//            console.log(err)
//        } 
//        console.log(result)
//     }
//     );   
//     })