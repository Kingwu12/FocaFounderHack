import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import StreakGraph from '../StreakGraph/StreakGraph';

const ActivityTab = () => {
  return (
    <Box width='100%'>
      {/* Productivity Graph Component */}
      <Heading as='h3' size='md' mb={4}>
        Productivity 365 Graph
      </Heading>
      <StreakGraph />
    </Box>
  );
};

export default ActivityTab;
