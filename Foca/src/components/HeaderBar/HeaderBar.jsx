import { Box, Flex, Text, Avatar, Spacer, useStyleConfig } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher/ColorModeSwitcher';
import userData from '../../data/userData';

const HeaderBar = () => {
  const styles = useStyleConfig('HeaderBar');
  return (
    <Box __css={styles} px={6}>
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            Foca
          </Text>
        </Box>
        <Flex alignItems='center'>
          <Box mr={5}>
            <ColorModeSwitcher />
          </Box>
          <Spacer />
          <Avatar name={userData.name} src={userData.avatarUrl} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderBar;
