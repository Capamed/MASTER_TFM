import "reflect-metadata"
import express from "express"
import database from "./config/database";
import indexRoutes from "./api/index";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar opciones CORS
const corsOptions = {
    origin: 'http://localhost:56668', // Reemplaza con el origen de tu aplicación web
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar el uso de credenciales (cookies, autenticación, etc.)
    optionsSuccessStatus: 204, // Establecer el código de estado para respuestas OPTIONS
};
app.use(cors(corsOptions))
app.use('/api', indexRoutes);

database.initialize()
    .then(() => {
        console.log('Database connected');

    })
    .catch(console.error)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});