import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import UploadComponent from '../../components/FocusFeed/UploadComponent';

const FocusFeedPage = () => {
  const { username } = useParams();

  return (
    <Box p={5}>
      <Heading as='h2' size='md' mb={4}>
        {username}'s Focus Feed
      </Heading>
      <UploadComponent />
      {/* Additional content for the focus feed will go here */}
    </Box>
  );
};

export default FocusFeedPage;
