import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import SearchScreens from "../screens/SearchScreens";

const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={SearchScreens}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack ;
