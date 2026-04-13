
import {db} from '../../index.js'
import bcrypt  from 'bcrypt'

const register= (req,res)=>{
const {email,password}= req.body
db.execute('select  email ,password from users where  email  = ?',[email],(err,data)=>{

           if (data.length!=0){

            bcrypt.compare(password,data[0].password,(err, result)=>{

                   
           if (result==true){

                 res.send ({Message:"success login"})
                
                
           } else{

                res.send({Message:"The email address and password are incorrect"})
           }
           
         
    })

}else{
 res.send ({Message:"The email address and password are incorrect"})


}

})
}



const login =(req,res)=>{
const {name,email,password}= req.body

db.execute('select  email from users where email = ?',[email],(err,data)=>{
 if (data.length==0){
 db.execute (' insert into  users (name,email,password) values (?,?,?) ', [name,email,bcrypt.hashSync(password,10)])

res.send({Message:"success create account"})
}else{
res.send({Message:"email already exists"})

}
})
}


export{
    register,
    login
}