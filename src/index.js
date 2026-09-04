
import dotenv from "dotenv"
import connectdb from "./db/index.db.js";
import {app} from './app.js'

dotenv.config();

//console.log("Mongo URI:", process.env.MONGODB_URI)



connectdb()
.then(
    app.listen(process.env.PORT || 8000, ()=>{ console.log(`server is running at ${process.env.PORT}`)})
)
.catch((err)=> { comdole.log ("DB CONN FAILLED")})
