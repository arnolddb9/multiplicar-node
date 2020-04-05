const argv = require('./config/yargs').argv;
const colors = require('colors');

const { CrearArchivo, Listar } = require('./multiplicar/multiplicar.js');

//let base = 10;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        Listar(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log('Error', err));
        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log('Error', err));
        break;
    default:
        console.log('comandos no reconocidos');

}

//console.log(argv.base);
//console.log(argv.limite);

//console.log(parametro.split('=')[1]);




//console.log(multiplicar);