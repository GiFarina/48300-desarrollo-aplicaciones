import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import COLORS from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import { titleStyle } from '../constants/TextStyles'


const StartGameScreen = ({ onStartGame }) => {

  const [enteredValue, setEnteredValue] = React.useState('')
  const [confirmed, setConfirmed] = React.useState(false)
  const [selectedNumber, setSelectedNumber] = React.useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputDectiptionText}>Elija un numero</Text>
          <Input style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="Limpiar" onPress={resetInputHandler} color={COLORS.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirmar" onPress={confirmInputHandler} color={COLORS.primary} />
            </View>
          </View>
        </Card>
        {confirmed &&
          <Card style={styles.selectedNumberContainer}>
            <Text>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Iniciar Juego" onPress={()=>{
              onStartGame(selectedNumber)
            }}/>
          </Card>
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    ...titleStyle,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center'
  },
  inputDectiptionText: {
    textAlign: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  selectedNumberContainer:{
    marginTop: 20,
    width: 200,
    maxWidth: '80%',
    padding:10,
    alignItems: 'center',
  }
})