import { Link as ReactRouterLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const NavLink = ({ target, title }: { target: string; title: string }) => {
  return (
    <Button as={ReactRouterLink} to={target} variant={'ghost'}>
      {title}
    </Button>
  )
}

export default NavLink
