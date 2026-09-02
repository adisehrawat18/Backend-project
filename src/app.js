import express from 'express'
import cors from 'cors'
import cookieparser from 'cookieparser' 

const app = express() 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieparser())


export {app}