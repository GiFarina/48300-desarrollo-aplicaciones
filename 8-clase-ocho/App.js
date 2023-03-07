import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded])

  const [userNumber, setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setGuessRounds(rounds);
  };

  const reStartHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      {
        !userNumber
          ? <StartGameScreen onStartGame={startGameHandler} />
          : userNumber && guessRounds <= 0 ?
            <GameScreen userOption={userNumber} onGameOver={gameOverHandler} /> :
            <GameOverScreen rounds={guessRounds} choise={userNumber} onRestart={reStartHandler} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
