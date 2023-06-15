import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import AccountScreens from "../screens/Account/AccountScreens";
import UserGuestScreen from "../screens/Account/UserGuestScreen/UserGuestScreen";
import LoginScreen from "../screens/Account/LoginScreen/LoginScreen";
import RegisterScrenn from "../screens/Account/RegisterScreen/RegisterScrenn";
const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreens}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Iniciar seccion " }}
        />
    <Stack.Screen
      name={screen.account.register}
      component={RegisterScrenn}
      options={{ title: "Registrarse " }}
      />
   </Stack.Navigator>
    
  );
};

export default AccountStack ;
