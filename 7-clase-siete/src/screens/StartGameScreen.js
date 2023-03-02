import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import COLORS from '../constants/Colors'
import Input from '../components/Input'


const StartGameScreen = () => {

  const [enteredValue, setEnteredValue] = React.useState('')

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
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
            <Button title="Limpiar" onPress={() => { }} color={COLORS.accent}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirmar" onPress={() => { }} color={COLORS.primary} />
          </View>
        </View>
      </Card>
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
    fontSize: 20,
    marginVertical: 10
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
  }
})