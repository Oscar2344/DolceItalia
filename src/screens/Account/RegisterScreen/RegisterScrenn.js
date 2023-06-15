import { View, } from 'react-native'
import React from 'react'
import { styles } from './RegisterScrenn.styles'
import { Image } from '@rneui/base'
import RegisterForm from '../../../components/Auth/RegisterForm/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const  RegisterScrenn =()  =>{
  return (
    <KeyboardAwareScrollView>
     <Image 
      source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")} 
        style={styles.image} 
        /> 
        <View style={styles.content}>
          <RegisterForm/>

        </View>
    </KeyboardAwareScrollView>
  )
}
export default RegisterScrenn