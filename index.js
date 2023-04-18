import * as dotenv from 'dotenv'
dotenv.config()
import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";


import Busquedas from "./models/busquedas.js";

const main = async()=>{
    let opt;

    const busquedas = new Busquedas()

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ')
                //Buscar lugares
                const lugares = await busquedas.ciudad(termino)
                
                //Seleccionar el lugar
                const id = await listarLugares(lugares)
                const lugarSel = lugares.find(lugar => lugar.id === id)
                const {nombre, lng, lat} =lugarSel
                


                //Clima


                //Mostrar resultados


                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', nombre )
                console.log('Lat:', lat )
                console.log('Lng:', lng)
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