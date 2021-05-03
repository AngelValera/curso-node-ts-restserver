import Usuario from "../models/usuario";

export const existeUsuarioPorId = async (id: string) => {
	// Verificar si el id es correcto
	const existeUsuario = await Usuario.findByPk(id);
	if (!existeUsuario) {
		throw new Error(`El id: ${id} no existe`);
	}
};

export const emailExiste = async (email: string) => {
	// Verificar si el email ya existe
	const existeEmail = await Usuario.findOne({ where: { email } });
	if (existeEmail) {
		throw new Error(`El email: ${email} ya está registrado en la BD`);
	}
};
