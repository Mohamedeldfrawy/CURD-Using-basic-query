import mysql from 'mysql2'

 export const dbconnect= mysql.createConnection("mysql://u3yrgksoa1jfjnej:jqkhILQmAaKChkKKhwiQ@bggbiozb9ldaralpbcyn-mysql.services.clever-cloud.com:3306/bggbiozb9ldaralpbcyn")
dbconnect.connect((err)=>{

if (err){console.log ("Error in the connection",err)} 
return console.log(`Database Connected`); 
  
})
