var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : process.env.host,
  user     : 'root',
  password : 'root',
  database : 'zkouska',
  port:'8889'

});
db.connect((err)=>{
    if(err)throw err
    console.log('database bezi');
})
module.exports = db
// module.exports =db