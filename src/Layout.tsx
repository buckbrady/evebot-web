import { Outlet } from 'react-router-dom'
import theme from './theme.ts'
import { ColorModeScript, Flex } from '@chakra-ui/react'
import Footer from './components/footer'
import NavBar from './components/navbar'

const Layout = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex direction="column">
        <div
          style={{
            margin: 0,
            minHeight: '100vh'
          }}
        >
          <NavBar />
          <Outlet />
        </div>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
