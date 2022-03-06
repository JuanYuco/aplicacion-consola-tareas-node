const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
    return new Promise( ( resolve ) => {
        console.clear();
        console.log('====================='.green);
        console.log('Seleccione una opción'.green);
        console.log('=====================\n'.green);

        console.log(`${ '1.'.green } Crear una tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completadas`);
        console.log(`${ '4.'.green } Listar tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        const readline = declararReadLine();
        questionReadLine( readline, 'Seleccione una opción: ', ( opt ) => {
            readline.close();
            resolve( opt );
        });
    });
}

const pausa = () => {
    return new Promise( ( resolve ) => {
        const readline = declararReadLine();
        questionReadLine( readline, `\nPresione ${ 'ENTER'.green } para continuar`, () => {
            readline.close();
            resolve();
        });
    });
}

const declararReadLine = () => {
    return require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

const questionReadLine = ( readline, question, callback ) => {
    readline.question( question, callback );
}

module.exports = {
    mostrarMenu
    , pausa
}