import {
  Center,
  PresenceTransition,
  Button,
  NativeBaseProvider,
  Stagger,
  StatusBar,
  Box,
} from "native-base";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import BottomNavbar from "./components/NavBar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import Live from "./components/Live";
import TopNavbar from "./components/TopNavBar";
import Balance from "./components/Balance";
import Games from "./components/Games";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const rotationValue = useRef(new Animated.Value(0)).current;

  // Use an async function to load and register the Ionicons font
  const startAnimation = () => {
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        rotationValue.setValue(0);
      }
    });
  };
  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const Tab = createBottomTabNavigator();
  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    color: "#fff",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    left: 0,
    right: 0,
    height: 100, // Adjust the height as needed
    backgroundColor: "white", // Set your desired background color
    flexDirection: "row",
    justifyContent: "space-between", // Adjust this for spacing between text tags
    alignItems: "center",
    paddingHorizontal: 10, // Add horizontal padding for the entire navbar
    paddingBottom: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 16,
  },
  navItem: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    marginTop: 3,
    // Set your desired text color
    // You can also add padding or margins to the text if needed
  },
});
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <TopNavbar />,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => (
            // Your custom header component for the HomeScreen
            <TopNavbar />
          ),
        }}
      />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Balance" component={Balance} />
    </Tab.Navigator>
  );
};
