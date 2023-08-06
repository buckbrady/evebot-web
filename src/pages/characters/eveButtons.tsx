import { Button, Image } from '@chakra-ui/react'
import btnLargeDark from '@/assets/eve-sso-login-black-large.png'
import btnLargeLight from '@/assets/eve-sso-login-white-large.png'
import btnSmallDark from '@/assets/eve-sso-login-black-small.png'
import btnSmallLight from '@/assets/eve-sso-login-white-small.png'
import { EveAuthorizeUrl } from './sso'

const LoginWithEVELrgDarkBtn = ({
  accountId
}: {
  accountId: string | null
}) => {
  return (
    <Button variant="link">
      <a href={accountId ? EveAuthorizeUrl(accountId) : ''}>
        <Image src={btnLargeDark} />
      </a>
    </Button>
  )
}

const LoginWithEVELrgLightBtn = ({
  accountId
}: {
  accountId: string | null
}) => {
  return (
    <Button variant="link">
      <a href={accountId ? EveAuthorizeUrl(accountId) : ''}>
        <Image src={btnLargeLight} />
      </a>
    </Button>
  )
}

const LoginWithEVESmDarkBtn = ({ accountId }: { accountId: string | null }) => {
  return (
    <Button variant="link">
      <a href={accountId ? EveAuthorizeUrl(accountId) : ''}>
        <Image src={btnSmallDark} />
      </a>
    </Button>
  )
}

const LoginWithEVESmLightBtn = ({
  accountId
}: {
  accountId: string | null
}) => {
  return (
    <Button variant="link">
      <a href={accountId ? EveAuthorizeUrl(accountId) : ''}>
        <Image src={btnSmallLight} />
      </a>
    </Button>
  )
}

export {
  LoginWithEVELrgDarkBtn,
  LoginWithEVELrgLightBtn,
  LoginWithEVESmDarkBtn,
  LoginWithEVESmLightBtn
}
