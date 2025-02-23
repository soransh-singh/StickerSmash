import { StyleSheet } from "react-native";

const Common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292E",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFFFFF",
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default Common;
