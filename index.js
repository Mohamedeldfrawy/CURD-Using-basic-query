import express from   'express'
const app = express()
const port =  process.env.port|| 3000
import {dbconnect} from '../Management API/db/db.js'
app.use(express.json());

import { route } from '../Management API/modules/users/routes.js'
import { route_product } from './modules/products/routes.js' 

app.use('/',route)
app.use('/',route_product)


 export const  db=dbconnect ;


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))