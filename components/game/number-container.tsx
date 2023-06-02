import { Text, View } from "react-native";
import styles from "./number-container.style";

const NumberContainer = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
