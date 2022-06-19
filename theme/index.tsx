import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
      darkBlue: '#120046',
      darkPurple: '#290052',
      blue: '#00BCFF',
      purple: '#8F14D2',
      green: '#05C697',
      darkText: '#0d0d0d',
      lightText: '#FFFFFF',
      contrastText: '#2D2D2D'
  },
  styles: {
      global: {
          '*': {
              margin: 0,
              padding: 0,
              outline: 0,
              boxSizing: 'border-box'
          },
          'html, body, #__next': {
              height: '100%',
              fontFamily: 'Poppins, sans-serif'
          }
      }
  },
  sizes: {
      ...theme.space,
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      container: {
          xs: '640px',
          sm: '768px',
          md: '1024px',
          lg: '1280px',
          xl: '1920px'
      }
  }
}

export default extendTheme(customTheme)
