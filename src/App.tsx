import { AuthorizerProvider } from '@authorizerdev/authorizer-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'
import './styles.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.evebot.tools/v1/graphql',
  cache: new InMemoryCache()
})

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
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </AuthorizerProvider>
    </ChakraProvider>
  )
}

export default App
