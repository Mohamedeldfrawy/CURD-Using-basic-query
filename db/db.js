import mysql from 'mysql2'

 export const dbconnect= mysql.createConnection({
user:"root",
host:"localhost",
password:"",
database:"linked_posts"


})
dbconnect.connect((err)=>{

if (err){console.log ("Error in the connection",err)} 
return console.log(`Database Connected`); 
  
})
