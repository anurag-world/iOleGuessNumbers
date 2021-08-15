import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import theme from './src/style/theme'

// Screen Imports
import GameHandler from './src/screens/GameHandler'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeBaseProvider theme={theme}>
        <GameHandler />
      </NativeBaseProvider>
    </>
  )
}
