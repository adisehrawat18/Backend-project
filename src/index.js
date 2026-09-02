
import dotenv from "dotenv"

dotenv.config();

console.log("Mongo URI:", process.env.MONGODB_URI)

import connectdb from "./db/index.db.js";

connectdb();