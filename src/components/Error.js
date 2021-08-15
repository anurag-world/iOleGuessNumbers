import React from 'react'
import { Text, Center } from 'native-base'

function Error(props) {
  return (
    <Center width={280} {...props}>
      <Text
        textAlign="center"
        fontSize="sm"
        color="secondary.600"
        fontWeight={600}
      >
        {props.errors}
      </Text>
    </Center>
  )
}

export default Error
