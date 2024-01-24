import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./travel_screen.styles";
import {
  travelData,
  updateTravelCardData,
} from "../../data/travel_cards_data_copy";
import { useEffect, useState } from "react";
import ItemCard from "../../сomponents/item_card/item_card";

//! сделать обновление страниы после удаления компонента item_card

export default function TravelScreen({ route }) {
  const { travelId } = route.params;
  const [isCardData, setCardData] = useState("Card not found");

  function componentUpdate() {
    // Обновление компонента
    const card = travelData.find((card) => card.id === travelId);
    if (card) {
      setCardData(card);
    }
  }

  useEffect(() => {
    componentUpdate();
  }, [travelData]);

  function generateRandomId() {
    const randomId = Math.floor(10000000 + Math.random() * 90000000).toString();
    return randomId;
  }

  function addItemCard() {
    const newRoute = { routeId: generateRandomId() };

    // Обновление состояния компонента
    setCardData((prevCardData) => {
      return {
        ...prevCardData,
        routes: [...prevCardData.routes, newRoute],
      };
    });

    // Обновление данных в массиве travelData
    const updatedCard = {
      id: travelId,
      routes: [...isCardData.routes, newRoute],
    };

    // Вызовите функцию обновления данных карточки
    updateTravelCardData(updatedCard);
  }

  return (
    <View style={styles["travel-screen"]}>
      <ScrollView style={styles["travel-screen__scroll"]}>
        <Image
          style={styles["travel-screen__img"]}
          source={{
            uri: isCardData.TravelCardImg,
          }}
        />
        <Text style={styles["travel-screen__title"]}>{isCardData.title}</Text>
        <View style={styles["travel-screen__sect-date"]}>
          <Text style={styles["travel-screen__"]}>{isCardData.startDate}</Text>
          <Text style={styles["travel-screen__"]}>{isCardData.endDate}</Text>
        </View>
        {Array.isArray(isCardData.routes) && isCardData.routes.length > 0 ? (
          isCardData.routes.map((route) => (
            <ItemCard
              key={route.routeId}
              itemKey={route.routeId}
              cardId={isCardData.id}
              componentUpdate={componentUpdate}
            />
          ))
        ) : (
          <Text>Добавьте пункты маршрутов</Text>
        )}

        <Text>{`\n`.repeat(5)}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles["travel-screen__add"]}
        onPress={addItemCard}
      >
        <Image
          style={styles["travel-screen__add-btn"]}
          source={require("../../img/add_route_128px.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
