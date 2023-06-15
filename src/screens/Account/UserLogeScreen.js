import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './UserGuestScreen/User.styles';
const UserLogeScreen =() => {
  return (
    <View>
      <Text>UserLogeScreen</Text>
      <Image 
      source={require("../../../assets/perro.png")} 
      style={styles.image} 
        /> 
    </View>
  );
};
export default UserLogeScreen;