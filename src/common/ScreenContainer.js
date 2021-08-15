import React from 'react'
import { Dimensions } from 'react-native'
import { Heading, Flex, Center, View } from 'native-base'

// Set Variables
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

// Main Screen Container
const ScreenContainer = ({ children, title }) => {
  return (
    <Flex flex={1}>
      <Header>{title}</Header>
      <View
        width={deviceWidth}
        height={deviceHeight}
        justifyContent="flex-start"
        paddingHorizontal={deviceWidth / 20}
        paddingVertical={deviceHeight / 20}
      >
        {children}
      </View>
    </Flex>
  )
}

// Header Function
const Header = ({ children }) => {
  return (
    <Center width="100%" bg="primary.700" p={4}>
      <Heading fontSize="xl" fontWeight="600" color="fontLight">
        {children}
      </Heading>
    </Center>
  )
}

export default ScreenContainer
