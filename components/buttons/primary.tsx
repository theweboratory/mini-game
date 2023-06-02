import { GestureResponderEvent, Pressable, Text, View } from "react-native";

import styles from "./primary.style";
import COLORS from "../../config/constants/colors";

const PrimaryButton = (
  props: React.PropsWithChildren<{
    onPress: (event: GestureResponderEvent) => void;
  }>
) => {
  const { children, onPress } = props;

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: COLORS.color4 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
