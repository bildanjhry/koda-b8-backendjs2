import express from "express";
import { corsMiddlewares } from "./src/middlewares/cors.js";
import routes from "./src/routes/index.js"
import { connectDB } from "./src/config/db.js";

const app = express()
app.use(express.urlencoded())
app.use(corsMiddlewares)
app.use(routes)

await connectDB()

const PORT = process.env.SERVER_PORT || 8080
app.listen(PORT, function(){
    console.log("listen to port 8080")
})
