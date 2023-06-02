import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styles from "./App.style";

import StartGameScreen from "./screens/start-game";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useCallback } from "react";
import GameScreen from "./screens/game";
import COLORS from "./config/constants/colors";
import GameOverScreen from "./screens/game-over";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    try {
      if (fontsLoaded) {
        setAppIsReady(true);
      } else {
        setAppIsReady(false);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [fontsLoaded]);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = (roundsLgth: number) => {
    setGuessRounds(roundsLgth);
    setGameOver(true);
  };

  const onStartNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const addRoundHandler = () => {
    setGuessRounds(guessRounds + 1);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNum={guessRounds}
        userNumber={userNumber}
        onStartNewGame={onStartNewGameHandler}
      />
    );
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <LinearGradient
        colors={[COLORS.color4, COLORS.color1]}
        style={styles.screen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}
