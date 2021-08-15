import React from 'react'
import { Center, Text, Input, FormControl } from 'native-base'

const EnterNumberCard = (props) => {
  return (
    <Center bg="primary.700" p={5} borderRadius={8}>
      <Text fontSize="xl" fontWeight="500" color="fontLight" mb={3}>
        Enter a 2-digit number:
      </Text>
      <FormControl isRequired>
        <Input
          isRequired={true}
          placeholder="Enter Number"
          placeholderTextColor="grey.400"
          color="grey.800"
          fontWeight="500"
          fontSize="lg"
          width={200}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={props.onChangeText}
          value={props.value}
          bg="primary.50"
          p={3}
          blurOnSubmit
        />
      </FormControl>
    </Center>
  )
}

export default EnterNumberCard
