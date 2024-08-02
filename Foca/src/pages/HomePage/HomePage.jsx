import { Container, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container>
      <Text>WASSUP</Text>
    </Container>
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
