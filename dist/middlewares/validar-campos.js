"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// Next, funcion que debe ejecutar si todo pasa correctamente
const validarCampos = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.default = validarCampos;
//# sourceMappingURL=validar-campos.js.map