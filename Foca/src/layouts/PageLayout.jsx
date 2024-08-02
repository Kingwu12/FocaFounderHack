import { Box, Flex } from '@chakra-ui/react';
import HeaderBar from '../components/HeaderBar/HeaderBar';

const PageLayout = ({ children }) => {
  return (
    <Flex flexDir='column' h='100vh'>
      {/* HeaderBar on the top */}
      <HeaderBar />

      {/* Page Content on the bottom */}
      <Box flex={1} mx={'auto'}>
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
