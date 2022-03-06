require('colors');
const inquirer = require('inquirer');
const { menuOptions, pausaOptions, deleteOptions, checkOptions } = require('./menuOptions');

const inquirerMenu = async() => {
    console.clear();

    console.log('====================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=====================\n'.green);

    const { opcion } = await inquirer.prompt(menuOptions);
    return opcion;
}

const pausa = async() => {
    console.log('\n');
    await inquirer.prompt(pausaOptions);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async( tareas ) => {
    const choices = tareas.map( (tarea, index) => {
        const idx = `${ index + 1 }.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    const preguntas = [ { ...deleteOptions, choices: [ { value: '0', name: `${ '0.'.green } Cancelar` }, ...choices ] } ];
    const { id } = await inquirer.prompt( preguntas );
    return id;
}

const confirmar = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listadoCheck = async( tareas ) => {
    const choices = tareas.map( (tarea, index) => {
        const idx = `${ index + 1 }.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: tarea.completadoEn ? true : false
        };
    });

    const pregunta = [ { ...checkOptions, choices } ];
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu
    , pausa
    , leerInput
    , listadoTareasBorrar
    , confirmar
    , listadoCheck
}
