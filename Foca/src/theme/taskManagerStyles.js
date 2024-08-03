import { mode } from '@chakra-ui/theme-tools';

const TaskManager = {
  baseStyle: (props) => ({
    container: {
      bgColor: mode('gray.300', 'gray.600')(props),
      borderColor: mode('gray.400', 'gray.500')(props),
      borderRadius: 'md',
      boxShadow: 'lg',
      p: 4,
      w: '300px',
      mx: 'auto',
    },
    header: {
      bg: mode('#542BD1', '#4A5568')(props),
      color: mode('black', 'white')(props),
      borderBottom: mode('1px solid #D1D5DA', '1px solid #4A5568')(props),
      borderRadius: 'md',
    },
    content: {
      bg: mode('gray.200', 'gray.700')(props),
      borderRadius: 'md',
      mt: 2,
      p: 2,
    },
    button: {
      bg: mode('blue.200', 'blue.700')(props),
      color: mode('black', 'white')(props),
    },
    accordionItem: {
      color: mode('black', 'white')(props),
      borderColor: mode('#D9D9D9', '#4A5568')(props),
    },
    modalContent: {
      bg: mode('white', '#2D3748')(props),
      color: mode('black', 'white')(props),
    },
    input: {
      bg: mode('gray.100', '#4A5568')(props),
      color: mode('black', 'white')(props),
    },
    textarea: {
      bg: mode('gray.100', '#4A5568')(props),
      color: mode('black', 'white')(props),
    },
  }),
};

export default TaskManager;
