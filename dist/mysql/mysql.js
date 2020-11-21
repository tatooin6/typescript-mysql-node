"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQL = void 0;
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        // solo funciona desde la misma clase porque es privado
        this.conectarDB();
    }
    // getter / es estatico porque se llama simplemente instanciando MySQL
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // metodo para ejecutar cualquier consulta
    static ejecutarQuery(query, callback) {
        // se usa instance porque se necesita tener una propiedad estatica para inicizarla 
        // no se puede hacer this.cnn porque no se sabe si esta inicializada
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.error('Error en query');
                console.error(err);
                return callback(err);
            }
            // si no se tiene registros
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                // error=null
                callback(null, results);
            }
        });
    }
    // metodo privado para consultar la conexión con la base de datos
    conectarDB() {
        // se llama un callback por dentro para dectar el error
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online!');
        });
    }
}
exports.MySQL = MySQL;
