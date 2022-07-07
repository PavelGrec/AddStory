const express= require('express');
const app = express();
const port = process.env.PORT || 2000;
const db = require('./db/db')
const getMaterials = require('./routes/GET/getMaterial')
const saveMaterials = require ('./routes/POST/saveMaterial')
const getUser = require ('./routes/POST/getUser')

app.use(express.json({extended:false}))
app.use(express.urlencoded({extended:false}))
const cors = require('cors')
app.use(cors({origin:'http://localhost:3000'}))



app.get('/',(req,res)=>{
    res.send('jsi na hlavni strance uztivateli')
})
app.use('/',getMaterials)
app.use('/',saveMaterials)
app.use('/',getUser)

app.listen(port,(err)=>{console.log('server 2000 ')})