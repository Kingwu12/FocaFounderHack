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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import userData from '../../data/userData';

const HamburgerDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(`/dashboard/${userData.username}`);
    onClose();
  };

  const handleFocusFeedClick = () => {
    navigate(`/focusfeed/${userData.username}`);
    onClose();
  };

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
          <DrawerContent borderTopRightRadius='lg' borderBottomRightRadius='lg'>
            <DrawerCloseButton />
            <DrawerHeader>Foca</DrawerHeader>
            <DrawerBody>
              <Button w='100%' mb={4} onClick={handleHomeClick}>
                Home
              </Button>
              <Button w='100%' mb={4} onClick={handleFocusFeedClick}>
                Focus Feed
              </Button>
              <Button w='100%' mb={4} onClick={onClose}>
                Profile
              </Button>
              <Button w='100%' mb={4} onClick={onClose}>
                Settings
              </Button>
              <Button w='100%' onClick={onClose}>
                Logout
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default HamburgerDrawer;
