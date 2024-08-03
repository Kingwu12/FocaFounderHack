import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import UploadComponent from '../../components/FocusFeed/UploadComponent';
import ShowPost from '../../components/FocusFeed/ShowPost';
import userData from '../../data/userData.json';
import gusData from '../../data/gusData.json';
import jesseData from '../../data/jesseData.json';

const FocusFeedPage = () => {
  const { username } = useParams();

  // Combine all posts from all users
  const allPosts = [
    ...userData.posts.map((post) => ({ ...post, username: userData.username, avatarUrl: userData.avatarUrl })),
    ...gusData.posts.map((post) => ({ ...post, username: gusData.username, avatarUrl: gusData.avatarUrl })),
    ...jesseData.posts.map((post) => ({ ...post, username: jesseData.username, avatarUrl: jesseData.avatarUrl })),
  ];

  return (
    <Box p={5} w='600px'>
      <Heading as='h2' size='md' mb={4}>
        {userData.username}'s Focus Feed
      </Heading>
      <UploadComponent username={username} />
      <Box mt={4}>
        {allPosts.map((post, index) => (
          <ShowPost key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default FocusFeedPage;
