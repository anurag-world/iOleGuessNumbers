import React from 'react'
import { Center, Heading, Text } from 'native-base'

const GameDetails = () => {
  return (
    <Center width="100%" mt={8}>
      <Heading fontSize={20} textAlign="center" color="grey.800">
        Welcome to the Number Guessing Game!
      </Heading>
      <Text fontSize="md" mt={4} color="grey.800">
        In this game you will play against your phone, you will select a number
        and then your phone has 6 rounds to guess your number. You will have
        options to give hints to your phone, whether the number you have
        selected is lower or greater than what your phone is guessing.
      </Text>
      <Text fontSize="md" mt={4} color="grey.800">
        You will win if your phone fails to guess your number in 6 rounds or you
        will lose if your phone successfully guesses your number within 6
        rounds.
      </Text>
      <Text
        mt={4}
        fontSize="lg"
        color="grey.800"
        fontWeight={500}
        textTransform="capitalize"
      >
        No cheating allowed
      </Text>
    </Center>
  )
}

export default GameDetails
