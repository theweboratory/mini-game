import { Text } from "react-native";
import styles from "./title.style";

const Title = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
