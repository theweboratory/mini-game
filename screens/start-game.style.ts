import { StyleSheet } from "react-native";
import COLORS from "../config/constants/colors";

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: COLORS.color1,
    borderBottomWidth: 2,
    color: COLORS.color1,
    marginVertical: 8,
  },
  btns: {
    flexDirection: "row",
  },
});
