import dotenv from "dotenv";
import Server from "./models/server";

// Configurar variables de entorno DOTENV
dotenv.config();

const server = new Server();

server.listen();
