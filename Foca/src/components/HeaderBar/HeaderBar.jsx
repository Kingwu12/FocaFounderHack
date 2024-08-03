import { Box, Flex, Text, useStyleConfig } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher/ColorModeSwitcher';
import userData from '../../data/userData';
import HamburgerDrawer from './HamburgerDrawer';
import AvatarDrawer from './AvatarDrawer';

const HeaderBar = () => {
  const styles = useStyleConfig('HeaderBar');
  return (
    <Box __css={styles} px={6}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        {/* Left part with Hamburger menu and Foca text */}
        <Flex alignItems='center'>
          <HamburgerDrawer />
          <Text ml={4} fontSize='xl' fontWeight='bold'>
            Foca
          </Text>
        </Flex>
        {/* Right part with ColorModeSwitcher and Avatar */}
        <Flex alignItems='center'>
          <Box mr={1.5}>
            <ColorModeSwitcher />
          </Box>
          <AvatarDrawer userData={userData} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
