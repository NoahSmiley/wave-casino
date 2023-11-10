import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIconsCommunity from "react-native-vector-icons/MaterialCommunityIcons";
const YourComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <TouchableOpacity>
          <View>
            <MaterialIconsCommunity
              name="cards-playing-spade-outline"
              size={100}
              color={"white"}
            />
            <Text>Games</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

export default YourComponent;
