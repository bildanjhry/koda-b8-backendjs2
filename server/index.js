import express from "express";
import { corsMiddlewares } from "./src/middlewares/cors.js";
import routes from "./src/routes/index.js"

const app = express()
app.use(express.urlencoded())
app.use(corsMiddlewares)
app.use(routes)
app.listen(8080, function(){
    console.log("listent port 8080")
})
