import { mode } from '@chakra-ui/theme-tools';

const globalStyles = {
  global: (props) => ({
    body: {
      bg: mode('#ffffff', '#161b22')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
  }),
};

export default globalStyles;
