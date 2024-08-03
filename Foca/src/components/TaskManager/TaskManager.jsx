import { useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  IconButton,
  Flex,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Spacer,
  Box,
  Button,
  useStyleConfig,
} from '@chakra-ui/react';
import TaskManagerModal from './TaskManagerModal';

const TaskManager = () => {
  const styles = useStyleConfig('TaskManager');
  const [taskList, setTaskList] = useState([
    {
      index: 1,
      title: '',
      desc: '',
    },
  ]);
  const [taskCount, setTaskCount] = useState(1);
  const [selectedTask, setSelectedTask] = useState(taskList[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addTask = () => {
    const newTask = {
      index: taskCount + 1,
      title: '',
      desc: '',
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    setTaskCount((prevTaskCount) => prevTaskCount + 1);
  };

  const editTask = () => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => (task.index === selectedTask.index ? selectedTask : task))
    );
    console.log(taskList);
  };

  const handleTitleChange = (e) =>
    setSelectedTask((prevTask) => ({
      ...prevTask,
      title: e.target.value,
    }));

  const handleDescChange = (e) =>
    setSelectedTask((prevTask) => ({
      ...prevTask,
      desc: e.target.value,
    }));

  return (
    <Box sx={styles.container} borderRadius='md' boxShadow='lg' w='500px' mx='auto' alignitems='flex-start'>
      <Flex flexDir='column' p={4} sx={styles.header} pt={8} pb={8}>
        <Box borderRadius='md'>
          <Flex>
            <Box fontWeight='bold'>Today&apos;s Tasks</Box>
            <Spacer />
            <Button onClick={addTask} sx={styles.button}>
              Add
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Box sx={styles.content} p={4} h='100%'>
        <Stack direction='column' spacing='5px'>
          {taskList.map((task) => (
            <Accordion key={task.index} allowToggle sx={styles.accordionItem} border='2px solid' borderRadius={3}>
              <AccordionItem>
                <Flex alignItems='center'>
                  <Box p='6px' fontWeight='bold' flex='1'>
                    {task.title || `Task ${task.index}`}
                  </Box>
                  <Flex>
                    <IconButton
                      sx={styles.accordionItem}
                      icon={<EditIcon />}
                      onClick={() => {
                        setSelectedTask(task);
                        onOpen();
                      }}
                      mr={2}
                    />
                    <AccordionButton>
                      <AccordionIcon />
                    </AccordionButton>
                  </Flex>
                </Flex>
                <AccordionPanel pb={4}>
                  <Box>{task.desc || 'no description'}</Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Stack>
      </Box>

      {/* Modal Section */}
      <TaskManagerModal
        isOpen={isOpen}
        onClose={onClose}
        selectedTask={selectedTask}
        handleTitleChange={handleTitleChange}
        handleDescChange={handleDescChange}
        editTask={editTask}
      />
    </Box>
  );
};

export default TaskManager;
