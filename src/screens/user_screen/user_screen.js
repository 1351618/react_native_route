import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./user_screen.styles";

export default function UserScreen({ navigation }) {
  return (
    <View style={styles["user-screen"]}>
      <ScrollView style={styles["user-screen__scroll"]}>
        <View style={styles["user-screen__foto-container"]}>
          <Image
            style={styles["user-screen__foto"]}
            source={require("../../db/2b991815049d0defcd15313fc7fce3d2.jpg")}
          />
        </View>
        <View style={styles["user-screen__container"]}>
          <Text style={styles["user-screen__name"]}>name</Text>
        </View>
        <View>
          <Text style={styles["user-screen__phone"]}>phone</Text>
        </View>
        <View>
          <Text style={styles["user-screen__email"]}>email</Text>
        </View>
        <View>
          <Text style={styles["user-screen__passord"]}>passord</Text>
        </View>

        <View style={styles["user-screen__switchs-container"]}>
          <TouchableOpacity
          // onPress={showWindAddTravelCard}
          >
            <Text>тема</Text>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={showWindAddTravelCard}
          >
            <Text>язык</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
