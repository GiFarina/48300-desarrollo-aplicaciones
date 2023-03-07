import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameScreen = ({userOption, onGameOver}) => {

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    };

    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userOption));
    const [rounds, setRounds] = React.useState(0);
    const currentLow = React.useRef(1);
    const currentHigh = React.useRef(100);

    React.useEffect(() => {
        if (currentGuess === userOption) {
            onGameOver(rounds);
        }
    }, [currentGuess, userOption, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userOption) || (direction === 'greater' && currentGuess > userOption)) {
            Alert.alert('No mientas!', 'Sabes que eso es incorrecto...', [{ text: 'Perdon!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };


  return (
    <View style={styles.screen}>
      <Text>La suposicion del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='MAYOR' onPress={nextGuessHandler.bind(this, 'lower')}/>
        <Button title='MENOR'onPress={nextGuessHandler.bind(this, 'greater')}/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
})