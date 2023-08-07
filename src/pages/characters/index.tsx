import { useAuthorizer } from '@authorizerdev/authorizer-react'
import { Center, Container, useColorMode } from '@chakra-ui/react'
import {
  LoginWithEVELrgDarkBtn,
  LoginWithEVELrgLightBtn
} from '@pages/characters/eveButtons.tsx'

const CharactersPage = () => {
  const { user } = useAuthorizer()
  const { colorMode } = useColorMode()

  return (
    <Container maxW={'80%'} paddingTop={'1em'}>
      <Center>
        {colorMode === 'light' ? (
          <LoginWithEVELrgLightBtn accountId={user?.id ? user.id : null} />
        ) : (
          <LoginWithEVELrgDarkBtn accountId={user?.id ? user.id : null} />
        )}
      </Center>
    </Container>
  )
}

export default CharactersPage
