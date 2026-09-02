
import dotenv from "dotenv"

dotenv.config();

//console.log("Mongo URI:", process.env.MONGODB_URI)

import connectdb from "./db/index.db.js";

connectdb()
.then(
    app.listen(process.env.PORT || 8000, ()=>{ console.log(`server is running at ${process.env.PORT}`)})
)
.catch((err)=> { comdole.log ("DB CONN FAILLED")})
