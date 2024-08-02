import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Toggle color mode'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitcher;
