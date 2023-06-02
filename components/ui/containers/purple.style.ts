import { StyleSheet } from "react-native";
import COLORS from "../../../config/constants/colors";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: COLORS.color2,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
