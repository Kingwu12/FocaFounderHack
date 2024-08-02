import { Box, Flex } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import { checkPropTypes } from 'prop-types';

// instead of adding the HeaderBar component to every page, we can add it only once to the PageLayout component and wrap the children with it.
// This way, we can have a HeaderBar on every page except the AuthPage.

const PageLayout = ({ children }) => {
  return (
    <Flex flexDir='column' h='100vh'>
      {/* HeaderBar on the top */}
      <HeaderBar />

      {/* Page Content on the bottom */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }} mx={'auto'}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

// Custom spinner component loads when checking User Authentication
// const PageLayoutSpinner = () => {
//   return (
//     <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
//       <Spinner size='xl' />
//     </Flex>
//   );
// };
