import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import MaterialIconsCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Center, ScrollView, Image } from "native-base";
import GridItem from "../components/GridItem";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateBalance } from "../redux/reducers/myReducer";
import LiveListItem from "../components/LiveListItem";
import MarqueeText from "../components/MarqueeComponent";
import { useAuth0 } from "react-native-auth0";

const Home = () => {
  type CloseIconProps = {
    onPress: () => void;
  };
  const [showOffer, setShowOffer] = useState(true);

  const LoginButton = () => {
    const { authorize } = useAuth0();

    const onPress = async () => {
      try {
        await authorize();
      } catch (e) {
        console.log(e);
      }
    };

    return <Button onPress={onPress}>Log in</Button>;
  };
  const CloseIcon: React.FC<CloseIconProps> = ({ onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{ position: "absolute", top: 10, right: 10 }}
    >
      <Ionicons name="close" size={17} color={"grey"} />
    </TouchableOpacity>
  );

  const fadeAnim = new Animated.Value(1);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setShowOffer(false);
    });
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <ScrollView>
          <Center
            style={{
              paddingTop: 100,
            }}
          >
            {showOffer && (
              <Animated.View
                style={{
                  opacity: fadeAnim,
                  transform: [
                    {
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-50, 0],
                      }),
                    },
                  ],
                  width: 320,
                  height: 175,
                  backgroundColor: "#1d1d1d",
                  borderRadius: 10,
                  marginBottom: 20,
                  paddingTop: 10,
                  justifyContent: "center",
                }}
              >
                <CloseIcon onPress={() => fadeOut()} />
                <Center
                  style={{ justifyContent: "center", position: "relative" }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 35,
                      fontWeight: "700",
                    }}
                  >
                    Welcome to Wave
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    Claim Free $1000 in Bets Today!
                  </Text>
                  <Button
                    style={{
                      marginTop: 20,
                      backgroundColor: "green",
                    }}
                    onPress={() => {
                      fadeOut();
                      setTimeout(() => {
                        setShowOffer(false);
                        dispatch(updateBalance(1000));
                      }, 1000);
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "700" }}>
                      Claim!
                    </Text>
                  </Button>
                </Center>
              </Animated.View>
            )}
          </Center>
          <MarqueeText />
          <LoginButton />
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Live
          </Text>
          <Text
            style={{ ...styles.subtitle, textAlign: "left", marginLeft: 15 }}
          >
            Top Live Events
          </Text>
          <Center>
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
          </Center>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Games
          </Text>
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
                  size={50}
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
                  size={50}
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
                  size={50}
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
                  size={50}
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
                  style={{ width: 35, height: 35 }}
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
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  marquee: {
    width: "80%",
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
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    paddingBottom: 10,
  },
});
