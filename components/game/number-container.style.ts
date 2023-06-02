import { StyleSheet } from "react-native";
import COLORS from "../../config/constants/colors";

export default StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.color1,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.color1,
    fontSize: 36,
    fontWeight: "bold",
  },
});
