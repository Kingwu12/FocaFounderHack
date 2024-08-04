import { Flex } from '@chakra-ui/react';
import TaskManager from '../../components/TaskManager/TaskManager';
import Timer from '../../components/Timer/Timer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FocusDashBoard = () => {
  const { username } = useParams();

  const [taskList, setTaskList] = useState([{
    index: 1,
    title: '',
    desc: ''
  }]);
  const [taskCount, setTaskCount] = useState(1);

  return (
    <Flex w='100vw' flexDir='row' h='100%'>
      <TaskManager
        taskList={taskList}
        setTaskList={setTaskList}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
        username={username} />
      <Timer taskList={taskList} />
    </Flex>
  );
};

export default FocusDashBoard;