import express from 'express'
import {addProduct,getAllProducts,getSingleProduct,getUserProducts,updateProduct,deleteProduct} from '../products/controllers.js'
 export const route_product= express.Router()



 route_product.post('/products', addProduct)
  route_product.get('/products', getAllProducts)
  route_product.get('/products/user/:id', getUserProducts)
 route_product.get('/products/:id',getSingleProduct)
  route_product.put('/products/:id',updateProduct)
  route_product.delete('/products/:id',deleteProduct)
  

 



 
