import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Box,
  Flex,
  Progress,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const HamburgerDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = useStyleConfig('HamburgerDrawer');

  // Mock data for demonstration
  const productivityGoal = {
    goal: 8, // hours
    completed: 5, // hours
  };

  const remainingTime = productivityGoal.goal - productivityGoal.completed;

  return (
    <>
      <Box display='flex' justifyContent='center'>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant='outline'
          aria-label='Open menu'
          fontSize='22px'
          size='md'
        />
      </Box>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent borderTopRightRadius='md' borderBottomRightRadius='md'>
            <Box bg={styles.topBgColor} color={styles.topTextColor}>
              <Flex justifyContent='space-between' alignItems='center' p={4} pl={4} pr={2}>
                <Text fontSize='xl' fontWeight='bold'>
                  Foca
                </Text>
                <DrawerCloseButton position='relative' top='0' right='0' />
              </Flex>
              <Box p={4}>
                <Flex justifyContent='space-between' alignItems='center' mb={4}>
                  <Text fontWeight='bold'>Today's Focus Goal</Text>
                  <Text fontWeight='bold'>
                    {Math.floor(remainingTime)}h {Math.floor((remainingTime % 1) * 60)}m to go
                  </Text>
                </Flex>
                <Box mb={4}>
                  <Progress
                    value={(productivityGoal.completed / productivityGoal.goal) * 100}
                    size='lg'
                    borderRadius='full'
                    colorScheme='purple'
                  />
                </Box>
              </Box>
            </Box>
            <Box h='1px' bg={styles.dividerColor} />
            <Box bg={styles.bottomBgColor} p={4} flex='1'>
              <DrawerBody p={0}>
                <Button w='100%' mb={4} onClick={onClose}>
                  <Link to='/dashboard/username'>Focus Dashboard</Link>
                </Button>
                <Button w='100%' mb={4} onClick={onClose}>
                  <Link to='/focusfeed/username'>Focus Feed</Link>
                </Button>
                <Button w='100%' mb={4} onClick={onClose}>
                  <Link to='/profile/username'>Profile</Link>
                </Button>
                <Button w='100%' mb={4} onClick={onClose}>
                  <Link to='/settings'>Settings</Link>
                </Button>
                <Button w='100%' onClick={onClose}>
                  Logout
                </Button>
              </DrawerBody>
            </Box>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default HamburgerDrawer;
