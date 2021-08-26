import React, { useState, useRef, useEffect } from 'react'
import { Alert, Dimensions } from 'react-native'
import { Center, Pressable, Heading, Text } from 'native-base'
import ScreenContainer from '../common/ScreenContainer'
import CardContainer from '../components/cards/CardContainer'

// Device Height
const deviceHeight = Dimensions.get('window').height

// Generate Random Number

const generateRandomNumbers = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) {
    return generateRandomNumbers(min, max, exclude)
  } else {
    return randomNum
  }
}

// Main App Function

const GameScreen = ({ route, navigation }) => {
  const { userNumber, userSelectedRounds } = route.params
  const title = `Rounds: ${userSelectedRounds}`

  const [userSelectedNumber, setUserSelectedNumber] = useState(userNumber)

  const initialGuess = generateRandomNumbers(1, 100, userSelectedNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [rounds, setRounds] = useState(0)

  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  //  Winning Conditions based on Rounds

  useEffect(() => {
    if (rounds === userSelectedRounds && currentGuess !== userSelectedNumber) {
      navigation.navigate('GameOverWin', {
        rounds: rounds,
      })
    } else if (rounds > 0 && currentGuess === userSelectedNumber) {
      navigation.navigate('GameOverLose', {
        rounds: rounds,
        userSelectedNumber: userSelectedNumber,
      })
    }
  }, [currentGuess, userSelectedNumber, rounds])

  // Anti Cheat Hints

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userSelectedNumber) ||
      (direction === 'greater' && currentGuess > userSelectedNumber)
    ) {
      Alert.alert(
        "Don't Cheat!",
        'Give your phone a fair chance to guess your number',
        [{ text: 'Sorry!', style: 'cancel' }]
      )
      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomNumbers(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setRounds((curRounds) => curRounds + 1)
  }

  return (
    <ScreenContainer title={title}>
      {console.log(rounds)}
      {/* Opponent's Guess Card */}
      <Center width="100%">
        <Pressable
          bg="secondary.500"
          _pressed={{
            bg: 'secondary.600',
          }}
          width={deviceHeight < '800' ? 120 : 160}
          height={deviceHeight < '800' ? 120 : 160}
          borderRadius={deviceHeight < '800' ? 120 : 160}
          alignItems="center"
          justifyContent="center"
          onPress={nextGuessHandler.bind(this, 'greater')}
        >
          <Text fontSize="xl" color="fontLight">
            Greater
          </Text>
        </Pressable>
      </Center>

      <Center width="100%" my={10}>
        <CardContainer
          width={deviceHeight < '800' ? 200 : 240}
          height={deviceHeight < '800' ? 160 : 180}
        >
          <Heading fontSize="lg" color="fontLight" mb={2}>
            Opponent's Guess
          </Heading>
          <Text fontSize="5xl" color="fontLight" fontWeight="bold">
            {currentGuess}
          </Text>
        </CardContainer>
      </Center>

      {/* Lower or Greater Buttons */}
      <Center width="100%">
        <Pressable
          bg="secondary.500"
          _pressed={{
            bg: 'secondary.600',
          }}
          width={deviceHeight < '800' ? 120 : 160}
          height={deviceHeight < '800' ? 120 : 160}
          borderRadius={deviceHeight < '800' ? 120 : 160}
          alignItems="center"
          justifyContent="center"
          onPress={nextGuessHandler.bind(this, 'lower')}
        >
          <Text fontSize="xl" color="fontLight">
            Lower
          </Text>
        </Pressable>
      </Center>
    </ScreenContainer>
  )
}

export default GameScreen
