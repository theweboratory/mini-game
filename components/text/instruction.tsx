import { Text, TextStyle } from "react-native";
import styles from "./instruction.style";

const Instruction = (props: React.PropsWithChildren<{ style?: TextStyle }>) => {
  const { children, style } = props;

  const renderedStyles = style ? [styles.text, style] : styles.text;

  return <Text style={renderedStyles}>{children}</Text>;
};

export default Instruction;
