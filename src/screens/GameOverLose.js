import React from 'react'
import {
  Center,
  Heading,
  Text,
  Button,
  View,
  Avatar,
  PresenceTransition,
} from 'native-base'

const GameOverScreen = ({ route, navigation }) => {
  const { rounds, userSelectedNumber } = route.params
  return (
    <Center flex={1} justifyContent="center" bg="primary.700">
      <Heading fontSize="xl" color="fontLight">
        You Selected: {userSelectedNumber}
      </Heading>
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
            duration: 500,
          },
        }}
      >
        <Avatar size={200} source={require('../../assets/lose.jpg')} my={8} />
      </PresenceTransition>
      <Heading fontSize="2xl" mb={4} color="fontLight">
        Game Over!
      </Heading>
      <Text fontSize="xl" color="fontLight" mb={2} bold>
        You Lose
      </Text>
      <Text fontSize="xl" color="fontLight" mb={8} bold>
        Number of Rounds: {rounds}
      </Text>
      <View>
        <Button
          colorScheme="secondary"
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          Play Again
        </Button>
      </View>
    </Center>
  )
}

export default GameOverScreen
