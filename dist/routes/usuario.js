"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const db_validators_1 = require("../helpers/db-validators");
const usuario_1 = require("../controllers/usuario");
const router = express_1.Router();
router.get("/", usuario_1.getUsuarios);
router.get("/:id", [express_validator_1.check("id").custom(db_validators_1.existeUsuarioPorId), validar_campos_1.default], usuario_1.getUsuario);
router.post("/", [
    express_validator_1.check("nombre", "El nombre no es válido").not().isEmpty(),
    express_validator_1.check("email", "El email no es válido").isEmail(),
    express_validator_1.check("email").custom(db_validators_1.emailExiste),
    validar_campos_1.default,
], usuario_1.postUsuario);
router.put("/:id", [
    express_validator_1.check("email", "El email no es válido").isEmail(),
    express_validator_1.check("id").custom(db_validators_1.existeUsuarioPorId),
    validar_campos_1.default,
], usuario_1.putUsuario);
router.delete("/:id", [express_validator_1.check("id").custom(db_validators_1.existeUsuarioPorId), validar_campos_1.default], usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map