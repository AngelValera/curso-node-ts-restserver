import express, { Application } from "express";
import userRoutes from "../routes/usuario";

class Server {
	private app: Application;
	private port: String;
	private apiPaths = {
		usuarios: "/api/usuarios",
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "8000";

		// Definir las rutas
		this.routes();
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