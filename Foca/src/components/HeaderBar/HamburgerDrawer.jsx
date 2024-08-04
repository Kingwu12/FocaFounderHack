import {
  Drawer,
  DrawerBody,
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
  VStack,
  Divider,
  useStyleConfig,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser, FaTasks, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HamburgerDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const styles = useStyleConfig('HamburgerDrawer');

  // Mock data for demonstration
  const productivityGoal = {
    goal: 4, // hours
    completed: 3, // hours
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
          <DrawerContent borderTopRightRadius='lg' borderBottomRightRadius='lg' maxW='400px'>
            <DrawerCloseButton />
            <Box bg={styles.topBgColor} color={styles.topTextColor}>
              <Flex justifyContent='space-between' alignItems='center' pt={4} pl={4} pr={2}>
                <Text fontSize='xl' fontWeight='bold'>
                  Foca
                </Text>
              </Flex>
              <Box p={4}>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Text fontWeight='bold' mb='1'>
                    Today&apos;s Focus Goal
                  </Text>
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
            <Divider color={styles.dividerColor} />
            <Box bg={styles.bottomBgColor} p={4} flex='1'>
              <DrawerBody p={0}>
                <VStack align='stretch' spacing={4}>
                  <Button variant='ghost' leftIcon={<FaUser />} justifyContent='flex-start' w='full' onClick={onClose}>
                    <Link to='/dashboard/username'>Focus Dashboard</Link>
                  </Button>
                  <Button variant='ghost' leftIcon={<FaTasks />} justifyContent='flex-start' w='full' onClick={onClose}>
                    <Link to='/focusfeed/username'>Focus Feed</Link>
                  </Button>
                  <Button
                    variant='ghost'
                    leftIcon={<FaClipboardList />}
                    justifyContent='flex-start'
                    w='full'
                    onClick={onClose}
                  >
                    <Link to='/profile/username'>Profile</Link>
                  </Button>
                  <Button variant='ghost' leftIcon={<FaCog />} justifyContent='flex-start' w='full' onClick={onClose}>
                    <Link to='/settings'>Settings</Link>
                  </Button>
                  <Divider />
                  <Button
                    variant='ghost'
                    leftIcon={<FaSignOutAlt />}
                    justifyContent='flex-start'
                    w='full'
                    onClick={onClose}
                  >
                    Logout
                  </Button>
                </VStack>
              </DrawerBody>
            </Box>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default HamburgerDrawer;
