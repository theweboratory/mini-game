import { View } from "react-native";
import styles from "./purple.style";

const PurpleContainer = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
};

export default PurpleContainer;
