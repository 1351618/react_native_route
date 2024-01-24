import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import BottomNavBar from "./src/сomponents/bottom_nav_panel/bottom_nav_panel";
import MainScreen from "./src/screens/main_screen/main_screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "./src/screens/user_screen/user_screen";
import { NavigationContainer } from "@react-navigation/native";
import Map from "./src/сomponents/map/map";
import TravelScreen from "./src/screens/travel_screen/travel_screen";
import Header from "./src/сomponents/header/header";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        {/* <Header /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="user" component={UserScreen} />
          <Stack.Screen name="map" component={Map} />
          <Stack.Screen name="Travel-Screen" component={TravelScreen} />
        </Stack.Navigator>
        <BottomNavBar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
