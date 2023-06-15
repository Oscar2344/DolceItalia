import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RankingScreens from "../screens/RankingScreens";

const Stack = createNativeStackNavigator();
const RankingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.ranking.ranking}
        component={RankingScreens}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
};

export default RankingStack ;


