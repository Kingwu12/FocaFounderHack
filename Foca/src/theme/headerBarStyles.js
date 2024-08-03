import { mode } from '@chakra-ui/theme-tools';

const HeaderBar = {
  baseStyle: (props) => ({
    bg: mode('#f6f8fa', '#24292e')(props),
    color: mode('gray.800', 'whiteAlpha.900')(props),
    borderBottom: `1px solid ${mode('#d1d5da', '#586069')(props)}`,
  }),
};

export default HeaderBar;
