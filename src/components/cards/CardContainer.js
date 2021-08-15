import React from 'react'
import { Box } from 'native-base'

const CardContainer = (props) => {
  return (
    <Box
      width={200}
      height={160}
      alignItems="center"
      justifyContent="center"
      borderRadius={8}
      bg="primary.700"
      {...props}
    >
      {props.children}
    </Box>
  )
}

export default CardContainer
