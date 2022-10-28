import React from 'react';
import { ImageBackground, StyleSheet, View,Image,Text} from 'react-native';
import Appbutton from './Appbutton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
    
        style={styles.background}
        source={require('../assets/Makeupbackground.jpg')}>
        
              <View style={styles.buttonContainer}>
              <Appbutton title="Signin " color='color1' />
              <Appbutton title="Register Yourself" color="color2"/>
      
              </View>
        
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        
    },
    buttonContainer:{
        padding:30,
        width:'100%'

    },
    Title:{
        color:'Black',
        fontSize:12,
        fontWeight:"bold",
        textTransform:'uppercase',
    
      },

   
});

export default WelcomeScreen;