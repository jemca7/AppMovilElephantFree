const BASE_API = 'https://elephant-project.com/api_rest/api/peticion';
const apiPeticion ={'origen':'Android','funcion':'','userName':'jcavero@gisystemsint.com','password':'12345','imei':'867259026453179','imsi':'714030007600450','nombreArchivoAssembly':'Gisystems.Elephant.BLL.dll','namespaceClase':'Gisystems.Elephant.BLL','nombreClase':'ApiAppMovil','metodoEjecutara':'','parametros':[],'pathLog':''}

class Api {
  
  async obtenerDatosInicio(apiParamsPeticion) {
    console.log('inicio');

  try {
         apiPeticion.funcion = apiParamsPeticion.funcion;
         apiPeticion.metodoEjecutara = apiParamsPeticion.metodoEjecutara;
          apiPeticion.parametros = apiParamsPeticion.parametros;
         console.log('´try');
            let response = await   fetch(BASE_API, {
            method: 'POST', // or 'PUT'
            body: "'" + JSON.stringify(apiPeticion) + "'", // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          });
        console.log('antes');
        let responseJson = await response.json();
        console.log('responseJson: ' + JSON.stringify(responseJson));
        return responseJson;
       } catch (error) 
        {
            console.error(error);
         }
}

    
  }
export default new Api();