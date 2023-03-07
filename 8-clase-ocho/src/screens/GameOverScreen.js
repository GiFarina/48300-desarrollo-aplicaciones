import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const GameOverScreen = ({ rounds, choise, onRestart}) => {
  return (
    <View style={styles.screen}>
        <Image source={require('../../assets/game-over.jpeg')} style={styles.image} resizeMode='cover' />
        <Card style={styles.resultContainer}>
            <Text>El juego termino en {rounds} rondas</Text>
            <Text>El numero era: {choise}</Text>
        </Card>
        <Button title='REINICIAR' onPress={onRestart}/>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultContainer:{
        marginVertical: 30,
        padding: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    image:{
        width: '80%',
        height: 300,
    }
})