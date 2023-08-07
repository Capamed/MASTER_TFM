import "reflect-metadata"
import express from "express"
import database from "./config/database";
//import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.initialize()
    .then(() => {
        console.log('Database connected');

    })
    .catch(console.error)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});