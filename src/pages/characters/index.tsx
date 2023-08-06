import { useAuthorizer } from '@authorizerdev/authorizer-react'
import { useColorMode } from '@chakra-ui/react'
import {
  LoginWithEVELrgDarkBtn,
  LoginWithEVELrgLightBtn
} from '@pages/characters/eveButtons.tsx'

const CharactersPage = () => {
  const { user } = useAuthorizer()
  const { colorMode } = useColorMode()

  return (
    <div>
      {colorMode === 'light' ? (
        <LoginWithEVELrgLightBtn accountId={user?.id ? user.id : null} />
      ) : (
        <LoginWithEVELrgDarkBtn accountId={user?.id ? user.id : null} />
      )}
    </div>
  )
}

export default CharactersPage
