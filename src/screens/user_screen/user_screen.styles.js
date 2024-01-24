import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "user-screen": {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  "user-screen__scroll": {
    flexGrow: 1,
  },
  "user-screen__foto-container": {
    width: "90%",
    height: "auto",
    maxWidth: 300,
    maxHeight: 300,
    margin: 10,
    aspectRatio: 1,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  "user-screen__foto": {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  "user-screen__container": {
    width: "100%",
    borderWidth: 1, // Добавляем ширину рамки
    borderColor: "gray", // Задаем цвет рамки
    padding: 4,
    borderRadius: 8,
  },
  "user-screen__switchs-container": {
    width: "100%",
    borderWidth: 1, // Добавляем ширину рамки
    borderColor: "gray", // Задаем цвет рамки
    padding: 4,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
