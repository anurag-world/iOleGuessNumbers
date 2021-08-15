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
    grey: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
    fontLight: '#ffffff',
    fontDark: '#000000',
    bgColor: '#fff',
  },
})

export default theme
