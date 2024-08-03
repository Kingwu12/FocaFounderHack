import React from 'react';
import {
  Box,
  Button,
  Flex,
  Textarea,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useStyleConfig,
} from '@chakra-ui/react';
import {
  FaGlobe,
  FaCaretDown,
  FaListAlt,
  FaPhotoVideo,
  FaLink,
  FaLock,
  FaUsers,
  FaUserFriends,
  FaUserCheck,
} from 'react-icons/fa';
import userData from '../../data/userData';

const UploadComponent = () => {
  const styles = useStyleConfig('UploadComponent');

  return (
    <Box __css={styles} p={3} borderRadius='sm' boxShadow='sm' w='100%' mx='auto'>
      <Flex mb={2}>
        <Button size='sm' leftIcon={<FaListAlt />} variant='outline' mr={2}>
          Select Task
        </Button>
        <Button size='sm' leftIcon={<FaPhotoVideo />} variant='outline' mr={2}>
          Add Photos/Videos
        </Button>
        <Button size='sm' leftIcon={<FaLink />} variant='outline'>
          Attach Link
        </Button>
      </Flex>
      <Flex align='flex-start' mb={2}>
        <Avatar name={userData.name} src={userData.avatarUrl} size='sm' mr={2} />
        <Textarea
          placeholder={`What task did you complete today, ${userData.name}?`}
          size='sm'
          resize='none'
          flex='1'
          border='none'
          _focus={{ outline: 'none' }}
        />
      </Flex>
      <Flex justify='flex-end' align='center'>
        <Menu>
          <MenuButton as={Button} size='sm' rightIcon={<FaCaretDown />} variant='outline' mr={2}>
            <FaGlobe />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaGlobe />}>Public</MenuItem>
            <MenuItem icon={<FaLock />}>Only Me</MenuItem>
            <MenuDivider />
            <MenuItem icon={<FaUsers />}>Friends</MenuItem>
            <MenuItem icon={<FaUserFriends />}>Friends except...</MenuItem>
            <MenuItem icon={<FaUserCheck />}>Specific friends</MenuItem>
          </MenuList>
        </Menu>
        <Button size='sm' colorScheme='blue'>
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default UploadComponent;
