import {
  Center,
  PresenceTransition,
  Button,
  NativeBaseProvider,
  Stagger,
  StatusBar,
} from "native-base";
import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
  SafeAreaView,
} from "react-native";
import BottomNavbar from "./components/NavBar";
import * as Font from "expo-font"; // Import Font from expo-font
import { useFonts } from "expo-font";

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

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <PresenceTransition
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 500,
            },
          }}
        >
          <Pressable onPress={() => startAnimation()}>
            <Animated.View style={animatedStyle}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("./assets/CasinoWhite.png")}
              />
            </Animated.View>
          </Pressable>
        </PresenceTransition>
      </View>

      <BottomNavbar />
    </NativeBaseProvider>
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
});
