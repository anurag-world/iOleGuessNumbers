import { extendTheme } from 'native-base'

const theme = extendTheme({
  colors: {
    primary: {
      50: '#daffff',
      100: '#affaff',
      200: '#80f4ff',
      300: '#52f0fe',
      400: '#31ebfe',
      500: '#24d1e5',
      600: '#12a4b2',
      700: '#007580',
      800: '#00464e',
      900: '#00191d',
    },
    secondary: {
      50: '#ffe6e6',
      100: '#f7bdbd',
      200: '#ec9494',
      300: '#e26a6a',
      400: '#d84040',
      500: '#bf2727',
      600: '#951d1d',
      700: '#6b1314',
      800: '#43090a',
      900: '#1d0000',
    },
    fontLight: '#ffffff',
    fontDark: '#000000',
    bgColor: '#fff',
  },
})

export default theme
