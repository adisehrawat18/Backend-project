require('dotenv').config()
import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('server baan gya !')
})

app.get('/login' , (req,res)=> {
    res.send ('<h1>login bhi kr diya</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})