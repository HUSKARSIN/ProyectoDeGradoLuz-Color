import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(){
    return(
        <TouchableOpacity>
            <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.button}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:10,
        color:'gray',
        marginTop:10, 
    },
    button:{
    },
});
