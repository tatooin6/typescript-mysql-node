import Server from './server/server';
import router from './router/router';
import { MySQL } from './mysql/mysql';

console.log('codigo de typescript');

const server = Server.init(3000);

server.app.use(router);

// con esto se llama al constructor
// const mysql = new MySQL(); 

// para llamar a la instancia que construye el objeto si no existe o usa el mismo si ya existe
// singleton
// MySQL.instance;

server.start(()=> {
    console.log('servidor corriendo en el puerto 3000');
});