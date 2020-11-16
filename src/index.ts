import Server from './server/server';
import router from './router/router';

console.log('codigo de typescript');

const server = Server.init(3000);

server.app.use(router);

server.start(()=> {
    console.log('servidor corriendo en el puerto 3000');
});