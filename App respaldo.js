import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Luz & Color</Text>
      <Text style={styles.subTitle}>INICIA SESIÓN CON TU CUENTA</Text>
      <TextInput placeholder='Tu correo electrónico' style={styles.textInput} />
      <TextInput placeholder='Contraseña' style={styles.textInput} secureTextEntry={true} />
      <Text style={styles.subTitle}>Olvidaste tu contraseña</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

/*Estilos de la aplicación*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  textInput: {
    paddingStart: 30,
    width: '80%',
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#34434D',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
