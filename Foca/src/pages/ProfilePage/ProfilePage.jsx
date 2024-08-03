import { Box, Heading, Text, Avatar, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image } from '@chakra-ui/react';
import ProfileTab from '../../components/Profile/ProfileTab';
import ActivityTab from '../../components/Profile/ActivityTab';
import Badges from '../../components/Profile/Badges';
import { useParams } from 'react-router-dom';
import userData from '../../data/userData';

const ProfilePage = () => {
  const { username } = useParams();
  return (
    <Box p={5} w='900px' mx='auto'>
      <Box display='flex' alignItems='center' mb={6}>
        <Avatar size='xl' src={userData.avatarUrl} mr={4} />
        <Box>
          <Flex alignItems='center' mb={2}>
            <Heading as='h2' size='lg' mr={4}>
              {userData.username}
            </Heading>
            <Flex alignItems='center'>
              <Image src='/images/ChickenMan.jpg' borderRadius='full' boxSize='20px' mr='-10px' />
              <Image src='/images/Jesse.jpg' borderRadius='full' boxSize='20px' mr={2} />
              <Text>{userData.buddies} buddies</Text>
            </Flex>
          </Flex>
          <Badges badges={userData.badges} />
        </Box>
      </Box>
      <Tabs variant='enclosed' width='100%'>
        <TabList justifyContent='flex-start'>
          <Tab flexBasis='150px'>Profile</Tab>
          <Tab flexBasis='150px'>Activity</Tab>
        </TabList>
        <TabPanels width='100%'>
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
