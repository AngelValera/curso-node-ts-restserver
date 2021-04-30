import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";

class Server {
	private app: Application;
	private port: String;
	private apiPaths = {
		usuarios: "/api/usuarios",
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "8000";

		// Métodos iniciales
		this.middlewares();
		this.routes();
	}

	middlewares() {
		// cors
		this.app.use(cors());

		// lectura del body
		this.app.use(express.json());

		// carpeta pública
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.apiPaths.usuarios, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en el puerto " + this.port);
		});
	}
}

export default Server;
