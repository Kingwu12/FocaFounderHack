// HOMEPAGE NAME CHANGE
import { Flex } from '@chakra-ui/react';
import TaskManager from '../../components/TaskManager';

export const FocusDashBoard = () => {
  return (
    <Flex w='100vw' flexDir='col' h='100%'>
      <TaskManager />
    </Flex>
  );
};

export default FocusDashBoard;
