import React, { Component } from 'react';
import {
  StyleSheet,
  View, 
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
//import Fondo from '../components/fondo';

class Login extends Component {
constructor(props){
  super(proprs);
  this.state{
    username:'';,
    password:'',
  }
}
componentDiMount(){
 this._loadInitialState().done();
}
_loadInitialState =async () => {
  var value = await AsyncStorage.getItem('user');
  if (value !== null){
    this.props.navigation.navigate('Profile');
  }
}

  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
             <View style={styles.container}>
             <Text style={style.header}>LOGIN </Text>
             <TextInput
                   style={styles.}
             </View>
        </KeyboardAvoidingView>
    );
  }
}

export default Login;