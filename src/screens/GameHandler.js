import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartGameScreen from './StartGameScreen'
import GameScreen from './GameScreen'
import GameOverWin from './GameOverWin'
import GameOverLose from './GameOverLose'

const Stack = createNativeStackNavigator()

const GameHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'iOle Mini Games' }}>
          {(props) => <StartGameScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="GameScreen" options={{ title: 'iOle Mini Games' }}>
          {(props) => <GameScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="GameOverWin"
          options={{
            title: 'iOle Mini Games',
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        >
          {(props) => <GameOverWin {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="GameOverLose"
          options={{
            title: 'iOle Mini Games',
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        >
          {(props) => <GameOverLose {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default GameHandler
