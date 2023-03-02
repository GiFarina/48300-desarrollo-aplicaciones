import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = React.useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      {
        !userNumber 
        ? <StartGameScreen onStartGame={startGameHandler} />
        : <GameScreen userOption={userNumber} /> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
