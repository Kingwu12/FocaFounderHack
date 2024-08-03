import { mode } from '@chakra-ui/theme-tools';

const HamburgerDrawer = {
  baseStyle: (props) => ({
    topBgColor: mode('#4a5568', '#2d3748')(props),
    topTextColor: mode('white', 'whiteAlpha.900')(props),
    dividerColor: mode('gray.300', 'gray.600')(props),
    bottomBgColor: mode('gray.100', '#1a202c')(props),
  }),
};

export default HamburgerDrawer;
