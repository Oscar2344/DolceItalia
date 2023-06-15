import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RestaurantsScreens from "../screens/Restaurant/RestaurantsScreens";
import AddRestaurantScreen from "../screens/Restaurant/AddRestaurantScreen";
//instancia del componente
const Stack = createNativeStackNavigator();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurants.restaurants}
        component={RestaurantsScreens}
        options={{ title: "Restaurants"}}
      />
      <Stack.Screen
        name={screen.restaurants.addRestaurant}
        component={AddRestaurantScreen}
        options={{ title: "Nuevo restraurante " }}
      />
    </Stack.Navigator>
  );
};
export default RestaurantsStack;