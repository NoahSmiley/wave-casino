import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsCommunity from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavbar = () => {
  interface navItem {
    logo?: boolean;
    text: string;
    icon?: any;
  }

  const navigation = useNavigation();

  const navItems = [
    { logo: true, text: "Home" },
    {
      logo: false,
      icon: <MaterialIconsCommunity name="horse" size={20} color={"grey"} />,
      text: "Live",
    },
    {
      logo: false,
      icon: (
        <MaterialIconsCommunity
          name="slot-machine-outline"
          size={20}
          color={"grey"}
        />
      ),
      text: "Games",
    },
    {
      logo: false,
      icon: (
        <FontAwesomeIcon5 name="money-bill-wave" size={15} color={"grey"} />
      ),
      text: "Balance",
    },
  ];

  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={styles.navbar}>
        {navItems.map((item: navItem) => {
          return (
            <View key={item.text} style={styles.itemContainer}>
              <TouchableOpacity onPress={() => navigation.navigate(item.text)}>
                <View style={styles.iconTextContainer}>
                  {item.logo ? (
                    <Image
                      alt="casino"
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/CasinoWhite.png")}
                    />
                  ) : (
                    item.icon
                  )}
                  <Text style={styles.navItem}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    height: 40,
    width: 40,
  },
  iconTextContainer: {
    alignItems: "center",
  },
  navItem: {
    fontSize: 13,
    color: "grey",
    fontWeight: "400",
    marginTop: 7,
  },
});

export default BottomNavbar;
