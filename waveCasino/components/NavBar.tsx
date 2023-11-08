import { Text, View, StyleSheet, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const BottomNavbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.textContainer}>
        <FontAwesomeIcon name="home" size={20} color={"white"} />
        <Text style={styles.navItem}>Home</Text>
      </View>
      <View style={styles.textContainer}>
        <Entypo name="drink" size={17} color={"white"} />
        <Text style={styles.navItem}>Live</Text>
      </View>
      <View style={styles.centeredView}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/CasinoWhite.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <MaterialIcons name="casino" size={20} color={"white"} />
        <Text style={styles.navItem}>Games</Text>
      </View>
      <View style={styles.textContainer}>
        <FontAwesomeIcon5 name="money-bill-wave" size={15} color={"white"} />
        <Text style={styles.navItem}>Balance</Text>
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
    height: 80, // Adjust the height as needed
    backgroundColor: "#0f0f0f", // Set your desired background color
    flexDirection: "row",
    justifyContent: "space-between", // Adjust this for spacing between text tags
    alignItems: "center",
    paddingHorizontal: 10, // Add horizontal padding for the entire navbar
    paddingBottom: 45,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    color: "white",
    fontWeight: "400",
    marginTop: 3,
    // Set your desired text color
    // You can also add padding or margins to the text if needed
  },
});

export default BottomNavbar;
