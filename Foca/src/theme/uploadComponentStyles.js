import { mode } from '@chakra-ui/theme-tools';

const UploadComponent = {
  baseStyle: (props) => ({
    bg: mode('gray.100', '#24292e')(props),
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
      bg: mode('gray.200', 'gray.800')(props),
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
};

export default UploadComponent;
