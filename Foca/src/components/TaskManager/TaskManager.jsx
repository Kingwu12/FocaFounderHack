import { useEffect, useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Input,
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
} from '@chakra-ui/react';

const TaskManager = () => {
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
    setTaskList([...taskList, newTask]);
    setTaskCount(taskCount + 1);
  };

  const editTask = () => {
    let tempTaskList = taskList.slice();
    tempTaskList[tempTaskList.findIndex((task) => task.index == selectedTask.index)] = selectedTask;
    setTaskList(tempTaskList);
    console.log(taskList);
  };

  const handleTitleSelect = (e) =>
    setSelectedTask((selectedTask) => {
      selectedTask.title = e.target.value;
      return selectedTask;
    });

  const handleDescSelect = (e) =>
    setSelectedTask((selectedTask) => {
      selectedTask.desc = e.target.value;
      return selectedTask;
    });

  return (
    <>
      <Box bgColor='white' h='100%' w='300px'>
        <Flex flexDir='column'>
          <Box bg='#542BD1' h='120px' w='100%' p={2} fontSize={20} fontWeight='bold'>
            <Flex>
              <Box>Today's Tasks</Box>
              <Spacer />
              <Button onClick={addTask}>Add</Button>
            </Flex>
          </Box>
        </Flex>
        <Stack p={2} direction='column' spacing='5px'>
          {taskList.map((task) => (
            <>
              <Accordion allowToggle color='black' border='1px' borderRadius='8px' borderColor='#D9D9D9'>
                <AccordionItem>
                  <Flex>
                    <Box p='6px' fontWeight='bold'>
                      {task.title.length == 0 ? `Task ${task.index}` : task.title}
                    </Box>
                    <Spacer />
                    <IconButton
                      color='black'
                      icon={<EditIcon />}
                      onClick={() => {
                        setSelectedTask(task);
                        onOpen();
                      }}
                    ></IconButton>
                    <Box>
                      <AccordionButton>
                        <AccordionIcon />
                      </AccordionButton>
                    </Box>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Box>{task.desc.length == 0 ? 'no description' : task.desc}</Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Task {selectedTask.index}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Task Title</FormLabel>
                <Stack spacing='10px'>
                  <Input placeholder='Title' defaultValue={selectedTask.title} onChange={handleTitleSelect} />
                  <Textarea
                    placeholder='Task Description'
                    defaultValue={selectedTask.desc}
                    onChange={handleDescSelect}
                  />
                </Stack>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={() => {
                  onClose();
                  editTask();
                }}
              >
                Save
              </Button>
              <Button variant='ghost' onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default TaskManager;
