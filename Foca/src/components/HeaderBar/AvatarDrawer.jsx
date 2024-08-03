import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Avatar,
  Box,
  VStack,
  Divider,
  Text,
  Button,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { FaUser, FaTasks, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AvatarDrawer = ({ userData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${userData.username}`);
    onClose();
  };

  return (
    <>
      <IconButton
        icon={<Avatar name={userData.name} src={userData.avatarUrl} size='sm' />}
        onClick={onOpen}
        variant='unstyled'
        aria-label='Open profile menu'
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent borderTopLeftRadius='lg' borderBottomLeftRadius='lg'>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex alignItems='center'>
                <Avatar name={userData.name} src={userData.avatarUrl} size='lg' />
                <Box ml={3}>
                  <Text fontWeight='bold'>{userData.username}</Text>
                  <Text fontSize='sm'>{userData.fullName}</Text>
                </Box>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <VStack align='stretch' spacing={4}>
                <Button
                  variant='ghost'
                  leftIcon={<FaUser />}
                  justifyContent='flex-start'
                  w='full'
                  onClick={handleProfileClick}
                >
                  Profile
                </Button>
                <Button variant='ghost' leftIcon={<FaTasks />} justifyContent='flex-start' w='full' onClick={onClose}>
                  My Tasks
                </Button>
                <Button
                  variant='ghost'
                  leftIcon={<FaClipboardList />}
                  justifyContent='flex-start'
                  w='full'
                  onClick={onClose}
                >
                  My Goals
                </Button>
                <Button variant='ghost' leftIcon={<FaCog />} justifyContent='flex-start' w='full' onClick={onClose}>
                  Settings
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
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default AvatarDrawer;
