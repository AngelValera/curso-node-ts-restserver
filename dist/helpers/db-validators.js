"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailExiste = exports.existeUsuarioPorId = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const existeUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el id es correcto
    const existeUsuario = yield usuario_1.default.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id: ${id} no existe`);
    }
});
exports.existeUsuarioPorId = existeUsuarioPorId;
const emailExiste = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el email ya existe
    const existeEmail = yield usuario_1.default.findOne({ where: { email } });
    if (existeEmail) {
        throw new Error(`El email: ${email} ya está registrado en la BD`);
    }
});
exports.emailExiste = emailExiste;
//# sourceMappingURL=db-validators.js.map