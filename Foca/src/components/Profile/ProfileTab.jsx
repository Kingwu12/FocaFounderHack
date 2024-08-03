import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import userData from '../../data/userData';

const ProfileTab = () => {
  return (
    <Box width='100%'>
      <Heading as='h3' size='md' mb={4}>
        Activity
      </Heading>
      <Text>Bio: {userData.bio}</Text>
      {/* Add more activity details here */}
    </Box>
  );
};

export default ProfileTab;
