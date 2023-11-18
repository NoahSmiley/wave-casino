import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Chip from "./Chip";
import { Button, Flex } from "native-base";

interface LiveListItemProps {
  boldTitle: string;
  time: string;
  chipLabel: string;
  plusOdds: string;
  minusOdds: string;
}

const LiveListItem: React.FC<LiveListItemProps> = ({
  boldTitle,
  time,
  chipLabel,
  plusOdds,
  minusOdds,
}) => {
  return (
    <View style={styles.box}>
      <Flex
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
        style={{ flex: 1 }}
      >
        <View style={styles.textContainer}>
          <Text style={{ color: "white", marginRight: 10, fontWeight: "800" }}>
            {boldTitle}
          </Text>
          <Text style={{ color: "white", marginRight: 10 }}>{time}</Text>
          <Chip label={chipLabel} />
        </View>
        <Flex flexDirection={"row"}>
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <Text style={{ color: "red" }}>{plusOdds}</Text>
            <Text style={{ color: "green" }}>{minusOdds}</Text>
          </View>
          <Button style={{ backgroundColor: "green", marginLeft: 10 }}>
            View
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default LiveListItem;
