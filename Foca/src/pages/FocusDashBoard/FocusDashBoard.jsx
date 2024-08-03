import { Flex } from '@chakra-ui/react';
import TaskManager from '../../components/TaskManager/TaskManager';
import { useParams } from 'react-router-dom';
import TaskManager from '../../components/TaskManager/TaskManager';

const FocusDashBoard = () => {
  const { username } = useParams();

  return (
    <Flex w='100vw' flexDir='column' h='100%'>
      <TaskManager username={username} />
    </Flex>
  );
};

export default FocusDashBoard;
