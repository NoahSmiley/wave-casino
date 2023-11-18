import { View, StyleSheet, Text, ScrollView } from "react-native";
import GridItem from "../components/GridItem";
import React from "react";
import MaterialIconsCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import { Center, Image } from "native-base";

const Games = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <ScrollView>
          <Center
            style={{
              paddingTop: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Games
            </Text>
          </Center>
          <Center
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              paddingTop: 20,
            }}
          >
            <GridItem
              text={"Black Jack"}
              itemColor={"#29CF56"}
              icon={
                <MaterialIconsCommunity
                  name="cards-playing-spade-outline"
                  size={75}
                  color={"white"}
                />
              }
              payout="2X"
            />
            <GridItem
              text={"Coin Flip"}
              itemColor={"#29C5F6"}
              icon={
                <MaterialIconsCommunity
                  name="hand-coin-outline"
                  size={70}
                  color={"white"}
                />
              }
              payout="2X"
            />
            <GridItem
              text={"Slots"}
              itemColor={"#FF5252"}
              payout="1X-300X"
              icon={
                <MaterialIconsCommunity
                  name="slot-machine-outline"
                  size={70}
                  color={"white"}
                />
              }
            />
            <GridItem
              text={"Horse Racing"}
              itemColor={"#673AB7"}
              payout="1X-300X"
              icon={
                <MaterialIconsCommunity
                  name="horse"
                  size={70}
                  color={"white"}
                />
              }
            />
            <GridItem
              text={"Wave"}
              itemColor={"#673AB7"}
              payout="1X-300X"
              icon={
                <Image
                  alt="casino"
                  style={{ width: 60, height: 60 }}
                  source={require("../assets/CasinoWhite.png")}
                />
              }
            />
          </Center>
        </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

export default Games;
