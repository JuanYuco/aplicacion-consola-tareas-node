require('colors');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            }
        ]
    }
];

const pausaOptions = [
    {
        type: 'input',
        name: 'opcion',
        message: `Presione ${ 'ENTER'.green } para continuar`
    }
]

const deleteOptions = {
    type: 'list',
    name: 'id',
    message: 'Borrar'
};

const checkOptions = {
    type: 'checkbox',
    name: 'ids',
    message: 'Selecciones'
};

module.exports = {
    menuOptions
    , pausaOptions
    , deleteOptions
    , checkOptions
}