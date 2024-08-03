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
  Avatar,
} from '@chakra-ui/react';

const AvatarDrawer = ({ userData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <DrawerContent borderTopLeftRadius='md' borderBottomLeftRadius='md'>
            <DrawerCloseButton />
            <DrawerHeader>Profile Menu</DrawerHeader>
            <DrawerBody>
              <Button w='100%' mb={4} onClick={onClose}>
                My Account
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

export default AvatarDrawer;
