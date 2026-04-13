import express from 'express'
export const route=express.Router()
import { register ,login} from '../users/controllers.js'



  route.post("/signUp",login)
 route.post("/signIn",register)




