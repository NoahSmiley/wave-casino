import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type GridItemProps = {
  text: string;
  itemColor: string;
  icon: any;
  payout: string;
};

const GridItem = ({ text, itemColor, icon, payout }: GridItemProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        backgroundColor: itemColor,
        width: 100,
        height: 100,
        borderRadius: 20,
        margin: 10,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <View style={{ marginRight: 20, marginLeft: 25, maxWidth: 75 }}>
        <View
          style={{
            flexDirection: "row",
            maxWidth: 100,
            maxHeight: 100,
            marginTop: 20,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
        <View
          style={{
            flex: 1,
            width: "80%",
            backgroundColor: itemColor,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              marginBottom: 10,
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Payout: {payout}
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default GridItem;
