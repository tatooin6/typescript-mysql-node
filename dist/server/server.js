"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
// clase para declarar y levantar un servidor
// clase para exportar y default parar importar por defecto esta clase
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    // server.init inicializa el constructor e inicializa esta funcion
    static init(puerto) {
        return new Server(puerto);
    }
    start(callback) {
        this.app.listen(this.port, callback());
        // cuando ya se esta escuchando el puerto se hace publica la carpeta public
        this.publicFolder();
    }
}
exports.default = Server;
