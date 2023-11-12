import { NativeBaseProvider } from "native-base";
import React from "react";
import BottomNavbar from "./components/NavBar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/Home";
import Live from "./components/Live";
import TopNavbar from "./components/TopNavBar";
import Balance from "./components/Balance";
import Games from "./components/Games";
import Home from "./components/Home";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TopNavbar />
        <TabNavigator />
        <BottomNavbar />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <TopNavbar />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <TopNavbar />,
        }}
      />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Balance" component={Balance} />
    </Tab.Navigator>
  );
};
