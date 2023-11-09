import { View, StyleSheet, Text } from "react-native";
const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.text}>Balance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
export default Balance;
