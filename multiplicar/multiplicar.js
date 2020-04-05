//require
const fs = require('fs');
const colors = require('colors');

let Listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {

            reject(`La base ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            //throw new Error(`El limite ${limite} no es un numero`);
            reject(`El limite ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let j = base; j <= limite; j++) {
            data += '============================\n'
            data += `====Tabla del ${j}=====\n`.green;
            data += '============================\n'
            for (let i = 1; i <= 10; i++) {
                data += `${j} * ${i} = ${j*i}\n`;
            }
            data += '\n';
        }



        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        //let data = 'Hola mundo';

        console.log(data);
        resolve('Impresion lista');

        /*fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve('Impresion lista')
                //console.log('Impresion lista');
        });*/
    })
}

let CrearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }



        if (!Number(limite)) {
            //throw new Error(`El limite ${limite} no es un numero`);
            reject(`El limite ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let j = base; j <= limite; j++) {

            for (let i = 1; i <= 10; i++) {
                data += `${j} * ${i} = ${j*i}\n`;
            }
            data += '\n';
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        //let data = 'Hola mundo';
        fs.writeFile(`tablas/tabla-${base}HastaEl${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base} hasta el ${limite}.txt`)
                //console.log('El archivo tabla-2.txt a sido creado');
        });
    });
}

module.exports = {
    CrearArchivo,
    Listar
}