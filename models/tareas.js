const Tarea = require("./tarea");
require('colors');

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        let listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[ key ];
            listado = [ ...listado, tarea ];
        });

        return listado;
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listado[ tarea.id ] = tarea;
    }

    cargarTareas( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        });
    }

    listadoCompleto( tareas = null ) {
        if ( !tareas ) tareas = this.listadoArr;

        tareas.forEach( ( tarea, index ) => {
            const indexText = `${ index + 1 }.`;
            const { desc, completadoEn } = tarea;
            console.log( `${ indexText.green } ${ desc }::${ ( !completadoEn ) ? 'Pendiente'.red : 'Completada'.green }` );
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        const tareas = this.listadoArr.filter( t => !t.completadoEn != completadas );
        this.listadoCompleto( tareas );
    }

    borrarTarea( id = '' ) {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    toggleCompletadas( ids = [] ) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();

            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes( tarea.id ) ) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;