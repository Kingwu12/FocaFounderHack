import { extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#161b22")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
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
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });

export default theme;