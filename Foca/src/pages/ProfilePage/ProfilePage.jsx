// src/pages/ProfilePage/ProfilePage.jsx
import { Box, Heading, Text, Avatar } from '@chakra-ui/react';
import StreakGraph from '../../components/StreakGraph/StreakGraph';

const ProfilePage = () => {
  // Mock user data
  const userData = {
    name: 'John Doe',
    bio: 'A passionate developer and productivity enthusiast.',
    avatarUrl: 'https://bit.ly/dan-abramov',
  };

  return (
    <Box p={5}>
      <Box display='flex' alignItems='center' mb={6}>
        <Avatar size='xl' src={userData.avatarUrl} mr={4} />
        <Box>
          <Heading as='h2' size='lg'>
            {userData.name}
          </Heading>
          <Text>{userData.bio}</Text>
        </Box>
      </Box>
      <Heading as='h3' size='md' mb={4}>
        Productivity Contribution Graph
      </Heading>
      <StreakGraph />
    </Box>
  );
};

export default ProfilePage;
