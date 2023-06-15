import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
import { screen } from "../utils/screenName";
import RestaurantsStack from "./RestauratsStack";
import FavoritesStack from "./FavoritesStack";
import RankingStack from "./RankingStack";
//crear una instancia para la gestion de la NAVEGACION

const Tab = createBottomTabNavigator();
export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#DE0F12",
        tabBarInactiveTintColor: "#222322",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantsStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.  favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurants.tab) {
    iconName = "compass-outline";
  }
  if (route.name == screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name == screen.ranking.tab) {
    iconName = "freebsd";
  }
  if (route.name == screen.search.tab) {
    iconName = "firebase";
  }
  if (route.name == screen.account.tab) {
    iconName = "database-alert-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
