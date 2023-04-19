import * as dotenv from 'dotenv'
import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
import Busquedas from "./models/busquedas.js";


dotenv.config()
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
                if(id==='0') continue;

                
                const lugarSel = lugares.find(lugar => lugar.id === id)
                //guardar en DB

                busquedas.agregarHistorial(lugarSel.nombre)
                const {nombre, lng, lat} =lugarSel;




                //Clima
                const clima = await busquedas.climaLugar(lat, lng)


                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', nombre.green )
                console.log('Lat:', lat )
                console.log('Lng:', lng)
                console.log('Temperatura:', clima.temp )
                console.log('Mínima:',  clima.min)
                console.log('Máxima:', clima.max )
                console.log('Cómo está el clima:', clima.desc.green )
                await pausa()
                break;
        
            case 2:
                busquedas.historial.forEach((lugar,i) =>{
                    const idx = `${i++}`.green;
                    console.log(`${idx} ${lugar}`)

                })

                break;

            
        }
        
    } while (opt!==0);
}


main();