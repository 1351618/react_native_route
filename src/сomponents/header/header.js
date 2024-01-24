import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.qwer}>12</Text>
      <Text style={styles.text}>main</Text>
      <Text style={styles.qwer}>12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightgray",
    height: "40px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    height: "40px",
    fontSize: 18,
    fontWeight: "bold",
  },
});
