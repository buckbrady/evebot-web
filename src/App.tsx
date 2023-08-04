import { AuthorizerProvider } from '@authorizerdev/authorizer-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'
import './styles.css'
function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthorizerProvider
        config={{
          authorizerURL: import.meta.env.VITE_AUTHORIZER_URL as string,
          redirectURL: window.location.origin,
          clientID: import.meta.env.VITE_AUTHORIZER_CLIENT_ID as string
        }}
      >
        <RouterProvider router={router} />
      </AuthorizerProvider>
    </ChakraProvider>
  )
}

export default App
