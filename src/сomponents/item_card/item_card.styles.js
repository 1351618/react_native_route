import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "item-card": {
    width: "100%",
    height: 100,
    backgroundColor: "#9bfaec",
    // margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2, // Добавляем ширину рамки
    borderColor: "black", // Задаем цвет рамки
    marginTop: 10,
    // marginBottom: 10,
  },
  "item-card__del-btn": {
    position: "absolute",
    right: 10,
    top: 10,
  },
  "item-card__del-btn_img": {
    height: 20,
    width: 20,
  },
});
