import { StyleSheet, Text, View } from "react-native";
import Map from "../../сomponents/map/map";

export default function MapScreen({ navigation }) {
  return (
    <View style={styles["map-screen"]}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  "map-screen": {},
  text: {
    height: "40px",
    fontSize: 18,
    fontWeight: "bold",
  },
});
