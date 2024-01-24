// src\сomponents\travel_card\travel_card.js
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./travel_card.styles";
import data from "../../data/travel_cards_data.js";
import { travelData } from "../../data/travel_cards_data_copy";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function TravelCard({ idCadr }) {
  const navigation = useNavigation();
  const [isCardData, setCardData] = useState("Card not found");

  useEffect(() => {
    const card = travelData.find((card) => card.id === idCadr);
    if (card) {
      setCardData(card);
    }
  }, [idCadr]);

  function openCardTravel() {
    // console.log(isCardData.id);
    navigation.navigate("Travel-Screen", { travelId: isCardData.id });
  }

  return (
    <TouchableOpacity style={styles["travel-card"]} onPress={openCardTravel}>
      <Image
        style={styles["travel-card__img"]}
        source={{
          uri: isCardData.TravelCardImg,
        }}
      />
      <View style={styles["travel-card__bc-title"]}>
        <Text style={styles["travel-card__title"]}>
          {isCardData.startDate} - {isCardData.endDate}
        </Text>
      </View>
      <View style={styles["travel-card__bc-title"]}>
        <Text style={styles["travel-card__title"]}>{isCardData.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
