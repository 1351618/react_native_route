import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "travel-screen": {
    flexGrow: 1,
  },
  "travel-screen__scroll": {
    flexGrow: 1,
  },
  "travel-screen__img": {
    height: 200,
    width: "100%",
  },
  "travel-screen__title": {
    textAlign: "center",
  },
  "travel-screen__sect-date": {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-around", // Распределяет элементы по краям
    alignItems: "center",
  },
  "travel-screen__card-item": {
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
  "travel-screen__add": {
    position: "absolute",
    right: 0,
    bottom: 1,
    padding: 10,
    backgroundColor: "rgba(133, 212, 200, 0.5)",
    borderTopLeftRadius: 50,
  },
  "travel-screen__add-btn": {
    height: 60,
    width: 60,
  },
});
