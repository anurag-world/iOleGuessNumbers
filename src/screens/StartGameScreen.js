import React, { useState } from 'react'
import {
  Radio,
  Center,
  View,
  Text,
  Button,
  HStack,
  PresenceTransition,
} from 'native-base'
import GameDetails from '../components/GameDetails'

// Common
import ScreenContainer from '../common/ScreenContainer'

// Components
import CurrentNumberCard from '../components/cards/CurrentNumberCard'
import EnterNumberCard from '../components/cards/EnterNumberCard'
import Error from '../components/Error'

export default function StartGameScreen({ navigation }) {
  const [number, setNumber] = useState()
  const [selectNumber, setSelectNumber] = useState('')
  const [errors, setErrors] = useState('')

  const reset = () => {
    setSelectNumber('')
    setNumber()
  }

  const handleValidation = (props) => {
    if (props !== '') {
      if (
        (typeof props !== 'undefined' && isNaN(props)) ||
        props < 10 ||
        props > 99
      ) {
        if (!props.match(/([1-9][0-9])/g)) {
          return setErrors(
            'Only 2-digit Numbers allowed, No Special Characters & number should not start with a 0'
          )
        }
      }
    }
    return setErrors('')
  }

  const handleSubmit = (props) => {
    if (props !== '' && props !== null) {
      if (
        (typeof props !== 'undefined' && isNaN(props)) ||
        props < 10 ||
        props > 99
      ) {
        if (!props.match(/([1-9][0-9])/g)) {
          return setErrors(
            'Only 2-digit Numbers allowed, No Special Characters & number should not start with a 0'
          )
        }
      }
      return setSelectNumber(parseInt(props))
    }
  }

  const onChangeNumber = (props) => {
    handleValidation(props)
    setNumber(props)
  }

  return (
    <>
      {/* Header */}

      <ScreenContainer title="Number Guessing Game">
        {/* Section */}

        <Center width="100%">
          {/* Enter Number Card */}

          {!selectNumber ? (
            <EnterNumberCard value={number} onChangeText={onChangeNumber} />
          ) : (
            <PresenceTransition
              visible="show"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 300,
                },
              }}
            >
              <CurrentNumberCard selectNumber={selectNumber} />
            </PresenceTransition>
          )}

          {errors !== '' && <Error errors={errors} mt={5} />}
        </Center>

        {/* Buttons */}

        <Center width="100%" mt={8}>
          {!selectNumber ? (
            <View width={150}>
              <Button
                colorScheme="secondary"
                onPress={() => handleSubmit(number)}
              >
                Confirm
              </Button>
            </View>
          ) : (
            <View width={150}>
              <Button
                colorScheme="secondary"
                onPress={() => {
                  navigation.navigate('GameScreen', {
                    userNumber: selectNumber,
                  })
                }}
                mb={3}
              >
                Start Game
              </Button>
              <Button colorScheme="grey" onPress={reset}>
                Reset
              </Button>
            </View>
          )}
        </Center>

        {/* Game Information */}
        {!selectNumber ? <GameDetails /> : <SelectDifficulty />}
      </ScreenContainer>
    </>
  )
}

const SelectDifficulty = () => {
  const [value, setValue] = React.useState('easy')

  return (
    <Center width="100%" mt={8}>
      <Radio.Group
        name="difficulty"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue)
        }}
        colorScheme="primary"
      >
        <HStack justifyContent="center">
          <Radio size="md" value="easy" mx={1} accessibilityLabel="easy">
            <Text color="primary.700" fontSize="md" ml={2} bold>
              Easy
            </Text>
          </Radio>
          <Radio size="md" value="medium" mx={1} accessibilityLabel="medium">
            <Text color="yellow.600" fontSize="md" ml={2} bold>
              Medium
            </Text>
          </Radio>
          <Radio size="md" value="hard" mx={1} accessibilityLabel="hard">
            <Text color="secondary.400" fontSize="md" ml={2} bold>
              Hard
            </Text>
          </Radio>
        </HStack>
        <Center w="100%" mt={5}>
          <Radio size="md" value="dondie" accessibilityLabel="hard">
            <Text color="secondary.600" fontSize="md" ml={2} bold>
              Do or Die (1 Round)
            </Text>
          </Radio>
        </Center>
      </Radio.Group>
    </Center>
  )
}
