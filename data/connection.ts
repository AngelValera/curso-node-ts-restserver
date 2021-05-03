import { Sequelize } from "sequelize";

const db = new Sequelize("Curso-Node", "demos", "003577", {
	host: "localhost",
	dialect: "mariadb",
	// logging: false,
});

export default db;
