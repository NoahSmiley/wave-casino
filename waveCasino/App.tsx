import { NativeBaseProvider } from "native-base";
import React from "react";
import BottomNavbar from "./components/Navigation/NavBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Live from "./pages/Live";
import TopNavbar from "./components/Navigation/TopNavBar";
import Balance from "./pages/Balance";
import Games from "./pages/Games";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { Button, Text } from "react-native";

export default function App() {

  const LogoutButton = () => {
    const { clearSession } = useAuth0();

    const onPress = async () => {
      try {
        await clearSession();
      } catch (e) {
        console.log(e);
      }
    };

    return <Button onPress={onPress} title="Log out" />;
  };

  const Profile = () => {
    const { user, error } = useAuth0();

    return (
      <>
        {user && <Text>Logged in as {user.name}</Text>}
        {!user && <Text>Not logged in</Text>}
        {error && <Text>{error.message}</Text>}
      </>
    );
  };
  return (
    <Auth0Provider
      domain={"dev-vecu4dhfh4bx6p17.us.auth0.com"}
      clientId={"EClqp7K0zrMrqbTGdyLKNzDyi2DIAHvO"}
    >
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <TopNavbar />
            <TabNavigator />
            <BottomNavbar />
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </Auth0Provider>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <TopNavbar />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <TopNavbar />,
        }}
      />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Balance" component={Balance} />
    </Tab.Navigator>
  );
};
