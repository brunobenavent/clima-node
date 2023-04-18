import axios from 'axios';


class Busquedas {
    historial = ['Tegucigalpa', 'MAdrid', 'San José']
    constructor(){
        //TODO Leer DB si existe
    }

    async ciudad(lugar =''){
        //petición http
        //console.log('Ciudad: ',lugar);

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data)
            return []
        } catch (error) {
            return []
        }

        return []; //retornarn los lugares
    }

}




export default Busquedas