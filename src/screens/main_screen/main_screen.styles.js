import { StyleSheet } from "react-native";

export default StyleSheet.create({
  "main-scrin": {
    flex: 1,
    backgroundColor: "#fff",
  },
  "main-scrin_scroll": {
    flexGrow: 1,
  },

  "add-travel": {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    opacity: 0.3,
  },
  "add-travel__img": {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  "add-travel__text": {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  "main-scrin__add-travel-card": {
    position: "absolute",
    right: 0,
    bottom: 1,
    padding: 10,
    backgroundColor: "rgba(133, 212, 200, 0.5)",
    borderTopLeftRadius: 50,
  },
  "add-travel-card__img": {
    height: 60,
    width: 60,
  },
});
