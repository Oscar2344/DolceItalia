import { AppNavigation } from "./src/navigation/AppNavegation";
import { NavigationContainer } from "@react-navigation/native";
import { initFirebase } from "./src/utils/firebase";
import Toast from "react-native-toast-message";
const App=() => {
  return (
    <>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
    <Toast/>
    </>
 
)
};

export default App;
