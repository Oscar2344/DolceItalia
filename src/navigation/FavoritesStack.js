import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import FavoritesScrens from "../screens/FavoritesScrens";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoritesScrens}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
