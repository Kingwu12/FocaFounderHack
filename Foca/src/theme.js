import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#ffffff', '#161b22')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
  }),
};

const components = {
  HeaderBar: {
    baseStyle: (props) => ({
      bg: mode('#f6f8fa', '#24292e')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
      borderBottom: `1px solid ${mode('#d1d5da', '#586069')(props)}`,
    }),
  },

  HamburgerDrawer: {
    baseStyle: (props) => ({
      topBgColor: mode('#4a5568', '#2d3748')(props), // Darker shade
      topTextColor: mode('white', 'whiteAlpha.900')(props),
      dividerColor: mode('gray.300', 'gray.600')(props),
      bottomBgColor: mode('gray.100', '#1a202c')(props), // Lighter shade
    }),
  },

  UploadComponent: {
    baseStyle: (props) => ({
      bg: mode('gray.100', '#24292e')(props), // Darker shade of white in light mode
      color: mode('gray.800', 'whiteAlpha.900')(props),
      borderColor: mode('gray.200', 'gray.600')(props),
      boxShadow: 'md',
      borderRadius: 'md',
      p: 4,
      mb: 4,
      w: '100%',
      maxW: '600px',
      mx: 'auto',
      Textarea: {
        bg: mode('gray.200', 'gray.800')(props), // Adjusted for contrast
        color: mode('gray.800', 'whiteAlpha.900')(props),
        _focus: {
          borderColor: mode('gray.300', 'gray.600')(props),
        },
      },
      Button: {
        bg: mode('gray.200', 'gray.700')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
        _hover: {
          bg: mode('gray.300', 'gray.600')(props),
        },
      },
    }),
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });

export default theme;
