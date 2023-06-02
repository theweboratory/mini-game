import { Alert, TextInput, View } from "react-native";

import styles from "./start-game.style";
import PrimaryButton from "../components/buttons/primary";
import { useState } from "react";
import Title from "../components/text/title";
import PurpleContainer from "../components/ui/containers/purple";
import Instruction from "../components/text/instruction";

const StartGameScreen: React.FC<{ onConfirmNumber: Function }> = (props) => {
  const { onConfirmNumber } = props;

  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const onTextChangeHandler = (input: string) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );

      return;
    }

    onConfirmNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <PurpleContainer>
        <Instruction>Enter a number</Instruction>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onTextChangeHandler}
        />
        <View style={styles.btns}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </PurpleContainer>
    </View>
  );
};

export default StartGameScreen;
