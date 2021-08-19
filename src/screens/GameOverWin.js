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
  const { rounds } = route.params
  return (
    <Center flex={1} justifyContent="center" bg="primary.600">
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
        <Avatar size={200} source={require('../../assets/win.jpg')} mb={8} />
      </PresenceTransition>
      <Heading fontSize="xl" mb={4} color="fontLight">
        Congratulations!
      </Heading>
      <Text fontSize="xl" color="fontLight" mb={2} bold>
        You Win
      </Text>
      <Text fontSize="xl" color="fontLight" mb={8} bold>
        Number of Rounds: {rounds}
      </Text>
      <View>
        <Button
          colorScheme="secondary"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }}
        >
          Play Again
        </Button>
      </View>
    </Center>
  )
}

export default GameOverScreen
