
import express = require('express');
import path = require('path');

// clase para declarar y levantar un servidor
// clase para exportar y default parar importar por defecto esta clase
export default class Server {
    // declaracion de variables con su tipado
    public app: express.Application;
    public port: number;

    constructor(puerto:number) {
        this.port = puerto;
        this.app = express();
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');

        this.app.use(express.static(publicPath));

    }

    // server.init inicializa el constructor e inicializa esta funcion
    static init (puerto: number) {
        return new Server(puerto);
    }

    start(callback: Function) {
        this.app.listen( this.port, callback() );
        // cuando ya se esta escuchando el puerto se hace publica la carpeta public
        this.publicFolder();
    }

}