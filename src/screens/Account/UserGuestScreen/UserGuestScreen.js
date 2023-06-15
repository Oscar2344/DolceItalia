import { View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./UserGuestScreen.styles";
import { Text, Button, Image } from "@rneui/themed";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";
const UserGuestScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () =>{
    navigation.navigate(screen.account.login);
    
  };
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
      style={styles.viewBody}
    >
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}> Consultar tu perfil de dolce italia</Text>
      <Text style={styles.descripcion}>
        
        ¿Como describirias tu mejor restaurante? Busca y vizualiza los mejores
        restaurante de una forma sencilla, vota cal te ha gustado mas y comenta
        como ha gsido tu hesperiencia.
      </Text>

      <Button title= "ver tu perfil"
      onPress={goToLogin}
      buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};
export default UserGuestScreen;
