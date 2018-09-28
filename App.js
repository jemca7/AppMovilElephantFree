/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/screens/Login';
import API from './src/utils/api';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shae or press menu button for dev menu',
});

const Application = StackNavigator({
   Home: {screen : Login},
},{
navigationOptions:{
  header: false,
}
});

type Props = {};
export default class App extends Component<Props> {
  state = {
  
    datosInicio: {'key':'1'}
  }
  async componentDidMount() {
   
    let url = 'https://elephant-project.com/api_rest/api/peticion';
    let data ="{'origen':'Android','funcion':'validarUsuario','userName':'jcavero@gisystemsint.com','password':'12345','imei':'867259026453179','imsi':'714030007600450','nombreArchivoAssembly':'Gisystems.Elephant.BLL.dll','namespaceClase':'Gisystems.Elephant.BLL','nombreClase':'ApiAppMovil_Gerencial','metodoEjecutara':'ObtenerDatosInicializacionBD','parametros':['jcavero@gisystemsint.com','12345'],'pathLog':''}";
  
    let apiParamsPeticion ={
      funcion: 'ejecutarMetodo',
      metodoEjecutara: 'ObtenerDatosInicializacionBD',
      parametros: ['jcavero@gisystemsint.com','12345']
    }

    const datosInicio = await API.obtenerDatosInicio(apiParamsPeticion);

    this.setState({ 
      datosInicio: datosInicio
    })
   
  }
  render() {
    return (
      <Application />
    );
  }
}
