import { Image, Text, View } from "react-native";

import styles from "./game-over.style";
import Title from "../components/text/title";
import PrimaryButton from "../components/buttons/primary";

const GameOverScreen: React.FC<{
  roundsNum: number;
  userNumber: number;
  onStartNewGame: Function;
}> = (props) => {
  const { roundsNum, userNumber, onStartNewGame } = props;

  const onNewGameBtnPress = () => {
    onStartNewGame();
  };

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNum}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGameBtnPress}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
