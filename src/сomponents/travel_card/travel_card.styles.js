import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "travel-card": {
    height: 200,
    backgroundColor: "#9bfaec",
    margin: 10,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 2, // Добавляем ширину рамки
    borderColor: "black", // Задаем цвет рамки
    marginTop: 10,
    marginBottom: 10,
  },
  "travel-card__img": {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  "travel-card__bc-title": {
    marginTop: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignSelf: "center",
    paddingHorizontal: 8,
    borderRadius: 5,
  },

  "travel-card__title": {
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
});
