import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar-campos";
import { emailExiste, existeUsuarioPorId } from "../helpers/db-validators";

import {
	getUsuario,
	getUsuarios,
	postUsuario,
	putUsuario,
	deleteUsuario,
} from "../controllers/usuario";

const router = Router();

router.get("/", getUsuarios);

router.get(
	"/:id",
	[check("id").custom(existeUsuarioPorId), validarCampos],
	getUsuario,
);

router.post(
	"/",
	[
		check("nombre", "El nombre no es válido").not().isEmpty(),
		check("email", "El email no es válido").isEmail(),
		check("email").custom(emailExiste),
		validarCampos,
	],
	postUsuario,
);

router.put(
	"/:id",
	[
		check("email", "El email no es válido").isEmail(),
		check("id").custom(existeUsuarioPorId),
		validarCampos,
	],
	putUsuario,
);

router.delete(
	"/:id",
	[check("id").custom(existeUsuarioPorId), validarCampos],
	deleteUsuario,
);

export default router;
