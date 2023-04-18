import axios from 'axios';


class Busquedas {
    historial = ['Tegucigalpa', 'MAdrid', 'San José']
    constructor(){
        //TODO Leer DB si existe
    }
    
    
    async ciudad(lugar =''){
        
        try {
            //petición http

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: {
                    'access_token': process.env.MAPBOX_KEY,
                    'limit': 5,
                    'language': 'es'
                }
            });
 
            const resp = await instance.get();
            console.log(resp.data.features)

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]

            }))
        } catch (error) {
            return []
        }

        return []; //retornarn los lugares
    }

}




export default Busquedas