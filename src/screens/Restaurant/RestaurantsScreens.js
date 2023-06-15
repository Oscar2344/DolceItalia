import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { screen } from "../../utils/screenName";
const RestaurantsScreens = (props) => {
  const { navigation } = props;
  const goToAddRestaurant = () => {
    // console.log("Ir a creacion de Restaurante");
    navigation.navigate(screen.restaurants.addRestaurant);
  };
  return (
    <View>
      <Text> Estamos en la screen de Restaurants</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
};
export default RestaurantsScreens;
