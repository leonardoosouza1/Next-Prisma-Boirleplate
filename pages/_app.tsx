import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AuthProvider } from '../src/contexts/auth'
import { Nav } from '../src/components/modules'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Nav />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
