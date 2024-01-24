import { TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./bottom_nav_panel.styles";

export default function BottomNavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("main")}
      >
        <Image
          style={styles.image}
          source={require("../../img/home_page_128px.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("map")}>
        <Image
          style={styles.image}
          source={require("../../img/flight_route_128px.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("user")}>
        <Image
          style={styles.image}
          source={require("../../img/polzovatel_128px.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
