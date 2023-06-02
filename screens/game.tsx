import { Alert, FlatList, ListRenderItem, Text, View } from "react-native";
import { useState, useEffect } from "react";
import styles from "./game.style";
import Title from "../components/text/title";
import generateRandomBetween from "../tools/funcs/generate-random-between";
import NumberContainer from "../components/game/number-container";
import PrimaryButton from "../components/buttons/primary";
import PurpleContainer from "../components/ui/containers/purple";
import Instruction from "../components/text/instruction";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/guess-log-item";

const GameScreen: React.FC<{
  userNumber: number;
  onGameOver: (length: number) => void;
}> = (props) => {
  const { userNumber, onGameOver } = props;

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  const [minBoundary, setMinBoundary] = useState<number>(1);
  const [maxBoundary, setMaxBoundary] = useState<number>(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    let newRndNum: number;

    if (direction === "lower") {
      newRndNum = generateRandomBetween(
        minBoundary,
        currentGuess,
        currentGuess
      );
      setMaxBoundary(currentGuess);
    } else {
      newRndNum = generateRandomBetween(
        currentGuess + 1,
        maxBoundary,
        currentGuess
      );
      setMinBoundary(currentGuess + 1);
    }
    setCurrentGuess(newRndNum);
    setGuessRounds((currState) => [newRndNum, ...currState]);
  };

  const guessRoundsLength = guessRounds.length;

  const roundListItem: ListRenderItem<number> = (itemData) => {
    return (
      <GuessLogItem
        roundNo={guessRoundsLength - itemData.index}
        guess={itemData.item}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <PurpleContainer>
        <Instruction style={styles.instruction}>Higher or lower?</Instruction>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("lower");
              }}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton
              onPress={() => {
                nextGuessHandler("higher");
              }}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </PurpleContainer>
      <FlatList
        data={guessRounds}
        renderItem={roundListItem}
        keyExtractor={(item: number, index) => {
          return `guess-round-${index + 1}`;
        }}
      ></FlatList>
    </View>
  );
};

export default GameScreen;
