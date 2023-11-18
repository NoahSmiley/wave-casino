import React from "react";
import { Text, View, StyleSheet, Easing } from "react-native";
import TextTicker from "react-native-text-ticker";

const MarqueeText = () => {
  const items = [
    {
      betName: "Trimont Final",
      gameType: "Horse Race",
      over: "+102",
      under: "-856",
    },
    {
      betName: "SFC | Riley vs God ",
      gameType: "MMA",
      over: "+124",
      under: "-351",
    },
    {
      betName: "SFC | Ambrose vs Tyson ",
      gameType: "MMA",
      over: "+52",
      under: "-10",
    },
  ];

  return (
    <View style={styles.container}>
      <TextTicker
        style={{ fontSize: 15, color: "white" }}
        easing={Easing.linear}
        scrollSpeed={20}
      >
        {items.map((item) => {
          return (
            <Text>
              <Text style={{ fontWeight: "bold" }}>{item.betName} | </Text>
              <Text>({item.gameType})</Text>
              <Text style={{ color: "green" }}> {item.over} </Text>
              <Text style={{ color: "red" }}> {item.under} </Text>
              <Text> </Text>
            </Text>
          );
        })}
      </TextTicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d1d1d",
    overflow: "hidden",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    color: "white",
  },
});

export default MarqueeText;
