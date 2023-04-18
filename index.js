import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";

import Busquedas from "./models/busquedas.js";


const main = async()=>{
    let opt;

    const busquedas = new Busquedas()

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                await busquedas.ciudad(lugar)
                //Buscar lugares


                //Seleccionar el lugar


                //Clima


                //Mostrar resultados


                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', )
                console.log('Lat:', )
                console.log('Lng:', )
                console.log('Temperatura:', )
                console.log('Mínima:', )
                console.log('Máxima:', )
                await pausa()
                break;
        
            default:
                break;
        }
        
    } while (opt!==0);
}


main();