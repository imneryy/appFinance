import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Entrada from "./pages/Entrada";
import Saida from "./pages/Saida";

import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#FFF",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: "compare-arrows",
        }}
      />
      <Tab.Screen
        name="Entrada"
        component={Entrada}
        options={{
          tabBarIcon: "attach-money",
        }}
      />
      <Tab.Screen
        name="Saida"
        component={Saida}
        options={{
          tabBarIcon: "storefront",
        }}
      />
    </Tab.Navigator>
  );
}
