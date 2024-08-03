import { Box, Flex } from '@chakra-ui/react';
import TaskManager from '../../components/TaskManager/TaskManager';
import Timer from '../../components/Timer/Timer';
import { useParams } from 'react-router-dom';

const FocusDashBoard = () => {
  const { username } = useParams();

  return (
    <Flex w='100vw' flexDir='row' h='100%'>
      <TaskManager username={username} />
      <Timer />
    </Flex>
  );
};

export default FocusDashBoard;
