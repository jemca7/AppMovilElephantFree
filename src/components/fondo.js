import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBacground
} from 'react-native';


function Fondo() {  
  return (
    <ImageBacground source={require('../images/fondoRegistro.jpg')}
                    style={styles.container}>
    </ImageBacground>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Fondo;