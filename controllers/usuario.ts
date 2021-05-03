import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
	const usuarios = await Usuario.findAll();

	res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await Usuario.findByPk(id);

	res.json(usuario);
};

export const postUsuario = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		//const usuario = Usuario.build(body);
		//await usuario.save();

		// podemos resumir las dos líneas anteriores en una sola línea usando create
		const usuario = await Usuario.create(body);
		res.json(usuario);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}
};

export const putUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const usuario = await Usuario.findByPk(id);
		// controlamos que el usuario siempre existe en el middleware
		if (usuario) {
			await usuario.update(body);
			res.json(usuario);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}
};

export const deleteUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const usuario = await Usuario.findByPk(id);
		// controlamos que el usuario siempre existe en el middleware
		if (usuario) {
			// await usuario.destroy(); 			  // Borrado físico
			await usuario.update({ estado: false }); // Borrado lógico
			res.json(usuario);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: "Hable con el administrador",
		});
	}
};
