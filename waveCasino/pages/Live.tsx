import React from "react";
import { Center, Flex } from "native-base";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import LiveListItem from "../components/LiveListItem";

const Live = () => {
  return (
    <View style={styles.container}>
      <Center style={{ paddingTop: 100 }}>
        <Text style={styles.title}>Live</Text>
        <ScrollView>
          <Flex flexDirection="column">
            <Text style={styles.subtitle}>Top Live Events</Text>
            <LiveListItem
              boldTitle="Trimont Final"
              time="10:34 AM CST"
              chipLabel="Horse Racing"
              plusOdds="-232"
              minusOdds="+421"
            />
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <Text style={styles.subtitle}>Live</Text>
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <LiveListItem
              boldTitle="SFC | Diaz vs Nate"
              time="9:00 PM EST"
              chipLabel="MMA"
              plusOdds="-436"
              minusOdds="+123"
            />
            <View style={styles.box}></View>
            <View style={styles.box}></View>
          </Flex>
        </ScrollView>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "left",
    paddingBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    paddingBottom: 10,
  },
  box: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 100,
    backgroundColor: "#1d1d1d",
    marginBottom: 10,
    borderRadius: 10,
    maxHeight: 400,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  boxText: {
    color: "white",
    marginRight: 10,
  },
});

export default Live;
