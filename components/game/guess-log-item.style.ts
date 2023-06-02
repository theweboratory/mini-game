import { StyleSheet } from "react-native";
import COLORS from "../../config/constants/colors";

export default StyleSheet.create({
  item: {
    borderColor: COLORS.color2,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.color1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
