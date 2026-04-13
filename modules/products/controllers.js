

import {db} from '../../index.js'

 const addProduct = (req,res)=>{
  // const id= req.params.id
const {name,description,price,quantity,user_id}=req.body


   db.execute('insert into  products  (name,description,price,quantity,user_id) values (?,?,?,?,?) ' ,[name,description,price,quantity,user_id],

     
   )
res.send("success")

}




//ok m
const getAllProducts = (req,res)=>{

   db.execute('select *  from products ',(error,data)=>{
 if(data.length==0) return res.send({message: "product is not found "})
  
   res.send( {message: "success", data: data})


   })





}


// ok
const  getSingleProduct= (req,res)=>{
   db.execute(' SELECT id, name , description , price , quantity , user_id  FROM products WHERE id = ? ',[req.params.id],(error,data)=>{
 if(data.length==0) return res.send({message: "product is not found "})
   res.send( {message: "success", data: data})

   })




}

// ok 
const  getUserProducts= (req,res)=>{
   db.execute('SELECT    users.id , users.name  ,  products.id as idProduct , products.name as nameProduct , products.description , products.price , products.quantity ,  products.created_at  FROM users JOIN  products  on users.id = products.user_id   WHERE users.id = ? ',[req.params.id],(err,data)=>{
 if(data.length==0) return res.send({message: "user is not found "})
   res.send( {message: "success", data: data})

   })





}







const  updateProduct = (req,res)=>{
  const  {name,description,price ,quantity}=  req.body
   db.execute(`update products set name = ? , description = ?  , price = ? , quantity = ?  where  id = ?  `,[name ,description,price,quantity , req.params.id], (error,data)=>{
if (error){

 return  res.send("product is not found")
}
res.send({message :"update success "})

   }

   )


}

const deleteProduct = (req,res)=>{
  
 db.execute ('DELETE FROM products where  id=  ?' , [req.params.id] )

res.send( {message : "deleted success "})

}






export{
addProduct,
  getAllProducts,
getSingleProduct,
updateProduct,
deleteProduct,

getUserProducts

}