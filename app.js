const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, listadoCheck } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');
console.clear();

const main = async() => {
    let opcion = '';
    const tareas = new Tareas();
    const bdTareas = leerDB();
    if ( bdTareas ) {
        tareas.cargarTareas( bdTareas );
    }

    do {
        opcion = await inquirerMenu();
        switch ( opcion ) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas( false );
                break;
            case '5':
                const ids = await listadoCheck( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' && await confirmar( 'Esta seguro que desea eliminar?' ) ) {
                    tareas.borrarTarea( id );
                }

                break;
        }

        guardarDB( tareas.listadoArr );

        if ( opcion !== '0' )  await pausa();
    } while( opcion !== '0' );
}

main();