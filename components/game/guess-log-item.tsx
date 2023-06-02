import { Text, View } from "react-native";
import styles from "./guess-log-item.style";

const GuessLogItem: React.FC<{ roundNo: number; guess: number }> = (props) => {
  const { roundNo, guess } = props;

  return (
    <View style={styles.item}>
      <Text style={styles.text}>#{roundNo}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;
