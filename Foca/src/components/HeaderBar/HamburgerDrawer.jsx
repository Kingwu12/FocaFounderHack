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

const HamburgerDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <DrawerCloseButton />
            <DrawerHeader>Foca</DrawerHeader>
            <DrawerBody>
              <Button w='100%' mb={4} onClick={onClose}>
                Home
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
