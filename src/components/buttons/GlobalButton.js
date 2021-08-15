import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import theme from '../../style/theme'

const { colors } = theme

const GlobalButton = (props) => {
  return (
    <Button
      style={{ ...styles.button, ...props.style }}
      color={props.color ? props.color : '#eceef4'}
      mode={props.mode ? props.mode : 'contained'}
      onPress={props.onPress}
      uppercase={false}
      labelStyle={{ fontWeight: '600', fontSize: 16 }}
    >
      {props.children}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
})

export default GlobalButton
