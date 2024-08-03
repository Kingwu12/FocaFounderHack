import React from 'react';
import { Box, Flex, Text, Badge } from '@chakra-ui/react';

const Badges = ({ badges }) => {
  return (
    <Flex wrap='wrap' gap={2}>
      {badges.map((badge, index) => (
        <Badge
          key={index}
          display='flex'
          alignItems='center'
          p={2}
          bg='transparent'
          borderRadius='md'
          border='1px solid'
          borderColor='gray.200'
        >
          {badge.color && (
            <Box as='span' mr={2} borderRadius='full' bg={badge.color} boxSize='12px' display='inline-block' />
          )}
          {badge.icon && (
            <Box as='span' mr={1} fontSize='1.2em'>
              {badge.icon}
            </Box>
          )}
          <Text>{badge.label}</Text>
        </Badge>
      ))}
    </Flex>
  );
};

export default Badges;
