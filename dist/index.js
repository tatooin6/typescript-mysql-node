"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
console.log('codigo de typescript');
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// con esto se llama al constructor
// const mysql = new MySQL(); 
// para llamar a la instancia que construye el objeto si no existe o usa el mismo si ya existe
// singleton
// MySQL.instance;
server.start(() => {
    console.log('servidor corriendo en el puerto 3000');
});
