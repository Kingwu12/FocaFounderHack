import { extendTheme } from '@chakra-ui/react';
import globalStyles from './globalStyles';
import headerBarStyles from './headerBarStyles';
import hamburgerDrawerStyles from './hamburgerDrawerStyles';
import uploadComponentStyles from './uploadComponentStyles';
import taskManagerStyles from './taskManagerStyles';


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: globalStyles,
  components: {
    headerBarStyles,
    hamburgerDrawerStyles,
    uploadComponentStyles,
    taskManagerStyles,
  },
});

export default theme;
