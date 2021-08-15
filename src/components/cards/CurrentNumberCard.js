import React from 'react'
import { Text } from 'native-base'
import CardContainer from './CardContainer'

const CurrentNumberCard = ({ selectNumber }) => {
  return (
    <CardContainer>
      <Text fontSize="lg" fontWeight="600" color="fontLight" mb={2}>
        You have selected
      </Text>
      <Text fontSize="5xl" fontWeight="bold" color="fontLight">
        {selectNumber}
      </Text>
    </CardContainer>
  )
}

export default CurrentNumberCard
