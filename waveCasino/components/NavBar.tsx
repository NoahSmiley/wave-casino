import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const BottomNavbar = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("HomeScreen");
  };

  const navigateToLive = () => {
    navigation.navigate("Live");
  };

  const navigateToGames = () => {
    navigation.navigate("Games");
  };

  const navigateToBalance = () => {
    navigation.navigate("Balance");
  };

  return (
    <View style={{ backgroundColor: "black" }}>
      <View style={styles.navbar}>
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={navigateToHome}>
            <View style={styles.iconTextContainer}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/CasinoWhite.png")}
              />
              <Text style={styles.navItem}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={navigateToLive}>
            <View style={styles.iconTextContainer}>
              <Entypo name="drink" size={17} color={"grey"} />
              <Text style={styles.navItem}>Live</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={navigateToLive}>
            <View style={styles.iconTextContainer}>
              <Entypo name="flash" size={20} color={"grey"} />
              <Text style={styles.navItem}>Flash</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={navigateToGames}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="casino" size={20} color={"grey"} />
              <Text style={styles.navItem}>Games</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={navigateToBalance}>
            <View style={styles.iconTextContainer}>
              <FontAwesomeIcon5
                name="money-bill-wave"
                size={15}
                color={"grey"}
              />
              <Text style={styles.navItem}>Balance</Text>
            </View>
          </TouchableOpacity>
        </View>
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
