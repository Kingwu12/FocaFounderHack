import {Flex} from '@chakra-ui/react';
import TaskManager from '../../components/TaskManager';

export const HomePage = () => {

  return (
    <Flex w='100vw' flexDir='col' h="100%">
      <TaskManager />
    </Flex>
  );
};

export default HomePage;

// General structure we are looking to do
// const HomePage = () => {
//   return (
//     <Container maxW={'container.lg'}>
//       <Flex gap={20}>
//         <Box>
//           <FeedPosts />
//         </Box>
//         <Box>
//           <SuggestedUsers />
//         </Box>
//       </Flex>
//     </Container>
//   );
// };

// export default HomePage;
