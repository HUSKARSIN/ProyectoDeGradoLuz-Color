import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const loadFonts = async () => {
    await Font.loadAsync({
      'PlaywriteDKLoopet': require('./assets/fonts/PlaywriteDKLoopet-VariableFont_wght.ttf'),
      'CrimsonText': require('./assets/fonts/CrimsonText-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError('Ingrese un correo electrónico válido.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      isValid = false;
    }

    if (isValid) {
      
      Alert.alert('Inicio de sesión exitoso');
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ImageBackground
      source={require('./assets/images/background.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Luz & Color</Text>
          <Text style={styles.subTitle}>INICIA SESIÓN CON TU CUENTA</Text>
          <TextInput
            placeholder='Tu correo electrónico'
            style={[styles.textInput, emailError && { borderColor: 'red', borderWidth: 1 }]}
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          <TextInput
            placeholder='Contraseña'
            style={[styles.textInput, passwordError && { borderColor: 'red', borderWidth: 1 }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          <Text style={styles.forgotPassword}>Olvidaste tu contraseña</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>INICIAR</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </ImageBackground>
  );
}

/*Estilos de la aplicación*/
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(241, 241, 241, 0.8)', 
  },
  container: {
    width: '80%',
    padding: 20, 
    borderRadius: 20, 
    backgroundColor: 'white', 
  },
  titulo: {
    fontSize: 40,
    color: '#34434D',
    fontWeight: 'bold',
    fontFamily: 'CrimsonText', 
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
    fontFamily: 'PlaywriteDKLoopet', 
  },
  forgotPassword: {
    fontSize: 14,
    color: '#34434D',
    marginVertical: 10,
    textDecorationLine: 'underline',
    fontFamily: 'PlaywriteDKLoopet', 
  },
  textInput: {
    paddingStart: 30,
    width: '100%',
    height: 50,
    padding: 10,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: '#fff',
    fontFamily: 'PlaywriteDKLoopet', 
  },
  button: {
    backgroundColor: '#34434D',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PlaywriteDKLoopet', 
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
    fontSize: 12,
  },
});
