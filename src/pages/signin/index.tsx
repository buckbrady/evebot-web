import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Authorizer } from '@authorizerdev/authorizer-react'

const SignIn = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        minW={'sm'}
        maxW={'md'}
        bg={'white'}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Authorizer />
      </Box>
    </Flex>
  )
}

export default SignIn
