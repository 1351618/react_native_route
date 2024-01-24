import {
  View,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import TravelCard from "../../сomponents/travel_card/travel_card";
import styles from "./main_screen.styles";
import { useState, useEffect } from "react";
import data from "../../data/travel_cards_data.js";
import { travelData, addTravelCard } from "../../data/travel_cards_data_copy";

export default function MainScreen({ navigation }) {
  const [cardIds, setCardIds] = useState([]);
  const [isShowCard, setShowCard] = useState(false);
  let travelNameInput = "";

  useEffect(() => {
    setTimeout(() => {
      const ids = travelData.map((card) => card.id);
      setCardIds(ids);
      // addTravelCard(2, travelNameInput);
      if (ids.length > 0) {
        setShowCard(true);
      } else {
        setShowCard(false);
      }
    }, 100);
  }, [travelData]);

  function showWindAddTravelCard() {
    Alert.prompt("Название путешествия", null, [
      { text: "Отменить", style: "cancel" },
      {
        text: "Создать",
        onPress: (travelName) => {
          travelNameInput = travelName;

          console.log("Введенное название путешествия:", travelNameInput);
          navigation.navigate("Travel-Screen", { travelName: travelNameInput });
          addTravelCard(2, travelNameInput);
        },
      },
    ]);
  }

  return (
    <View style={styles["main-scrin"]}>
      {isShowCard ? (
        <ScrollView style={styles["main-scrin_scroll"]}>
          {cardIds.map((id) => (
            <TravelCard key={id} idCadr={id} />
          ))}
          <Text>{"\n\n\n\n\n"}</Text>
        </ScrollView>
      ) : (
        <View style={[styles["add-travel"]]}>
          <TouchableOpacity
          // onPress={() => navigation.navigate("map")}
          >
            <Image
              style={styles["add-travel__img"]}
              source={require("../../img/plyus_128px.png")}
            />
            <Text style={styles["add-travel__text"]}>
              создайте ваш {"\n"} первый маршрут
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles["main-scrin__add-travel-card"]}
        onPress={showWindAddTravelCard}
      >
        <Image
          style={styles["add-travel-card__img"]}
          source={require("../../img/add_travel_128px.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
