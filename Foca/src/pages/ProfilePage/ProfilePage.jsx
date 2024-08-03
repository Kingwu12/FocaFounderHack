import React from 'react';
import { Box, Heading, Text, Avatar, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProfileTab from '../../components/Profile/ProfileTab';
import ActivityTab from '../../components/Profile/ActivityTab';

const ProfilePage = () => {
  // Mock user data
  const userData = {
    name: 'John Doe',
    bio: 'A passionate developer and productivity enthusiast.',
    avatarUrl: 'https://bit.ly/dan-abramov',
  };

  return (
    // Layout with header, user data, and tabs
    <Box p={5} w='900px' mx='auto'>
      <Box display='flex' alignItems='center' mb={6}>
        <Avatar size='xl' src={userData.avatarUrl} mr={4} />
        <Box>
          <Heading as='h2' size='lg'>
            {userData.name}
          </Heading>
          <Text>{userData.bio}</Text>
        </Box>
      </Box>

      {/* Tabs and their respective components */}
      <Tabs variant='enclosed'>
        <TabList justifyContent='flex-start'>
          <Tab flexBasis='150px'>Profile</Tab>
          <Tab flexBasis='150px'>Activity</Tab>
        </TabList>

        {/* Content of tabs */}
        <TabPanels width='800px'>
          <TabPanel width='100%'>
            <ProfileTab />
          </TabPanel>
          <TabPanel width='100%'>
            <ActivityTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProfilePage;
