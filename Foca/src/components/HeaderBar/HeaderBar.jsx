import { Box, Flex, Text, Button, Avatar, Spacer } from '@chakra-ui/react';

const HeaderBar = () => {
  return (
    <Box bg='teal.500' px={4}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Box>
          <Text fontSize='xl' fontWeight='bold' color='white'>
            MyApp
          </Text>
        </Box>
        <Flex alignItems='center'>
          <Button colorScheme='teal' variant='ghost'>
            Home
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            About
          </Button>
          <Button colorScheme='teal' variant='ghost'>
            Contact
          </Button>
          <Spacer />
          <Avatar name='John Doe' src='https://bit.ly/dan-abramov' />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
