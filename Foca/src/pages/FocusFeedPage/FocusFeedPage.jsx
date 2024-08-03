import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const FocusFeedPage = () => {
  const { username } = useParams();

  return (
    <Box p={5}>
      <Heading as='h2' size='lg' mb={4}>
        {username}'s Focus Feed
      </Heading>
      {/* Content for the focus feed will go here */}
      <Text>Here you will see the tasks and uploads from you and your buddies.</Text>
    </Box>
  );
};

export default FocusFeedPage;
