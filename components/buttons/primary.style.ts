import { StyleSheet } from "react-native";
import COLORS from "../../config/constants/colors";

export default StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: COLORS.color3,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
