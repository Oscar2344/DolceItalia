import { View, ScrollView } from 'react-native'
import React from 'react'
import { Text,Image } from '@rneui/base'
import { styles } from './LoginSreen.styles'
import { screen } from "../../../utils/screenName"; 
import LoginForm from '../../../components/Auth/LoginForm/LoginForm';
import { Button } from "@rneui/base"; 

const LoginScreen=(props)=> { 
  const { navigation}=props; 
  const goToRegister = () => { 
    navigation.navigate(screen.account.register); 
  }; 
  return ( 
    <ScrollView> 
      <Image 
      source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")} 
        style={styles.image} 
        /> 
        <View style={styles.content}>
          <LoginForm/>
      
        <Text style ={styles.texRegister}>
          ¿Aun no tienes cuenta? <Text style ={styles.btnRegister} onPress={goToRegister}>Registrarse</Text>
      
        </Text> 
        </View>
    </ScrollView> 
  ); 
}; 
export default LoginScreen;