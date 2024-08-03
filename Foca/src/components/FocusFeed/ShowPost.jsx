import React from 'react';
import { Box, Text, Flex, Avatar, Progress } from '@chakra-ui/react';

const ShowPost = ({ post }) => {
  // Generate random productivity efficiency between 0 and 100
  const productivityEfficiency = Math.floor(Math.random() * 101);

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} mb={4}>
      <Flex align='center' mb={2}>
        <Avatar size='sm' name={post.username} src={post.avatarUrl} mr={2} />
        <Text fontWeight='bold'>{post.task}</Text>
      </Flex>
      <Text fontSize='sm' color='gray.500'>
        {post.time}
      </Text>
      <Text mt={2}>{post.input}</Text>
      <Box mt={4}>
        <Text fontSize='sm' color='gray.500' mb={1}>
          Productivity Efficiency: {productivityEfficiency}%
        </Text>
        <Progress value={productivityEfficiency} colorScheme='green' />
      </Box>
    </Box>
  );
};

export default ShowPost;
