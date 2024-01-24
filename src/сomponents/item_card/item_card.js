import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./item_card.styles";
import { deleteRouteFromTravelCard } from "../../data/travel_cards_data_copy";

export default function ItemCard({ itemKey, cardId, componentUpdate }) {
  function delItemCard() {
    deleteRouteFromTravelCard(cardId, itemKey);
    // navigation.navigate("Travel-Screen", { travelName: travelNameInput });
    componentUpdate();
  }
  return (
    <View style={styles["item-card"]}>
      <Text style={styles["item-card__"]}>Key: {itemKey}</Text>
      <Text style={styles["item-card__"]}>Card ID: {cardId}</Text>
      <TouchableOpacity
        style={styles["item-card__del-btn"]}
        onPress={delItemCard}
      >
        <Image
          style={styles["item-card__del-btn_img"]}
          source={require("../../img/delite_128px.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
