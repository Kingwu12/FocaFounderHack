import { useState } from 'react';
import { useEditableControls, Editable, EditablePreview, Input, EditableInput, ButtonGroup, Flex, Stack, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Spacer, Box, Button } from '@chakra-ui/react';

const TaskManager = () => {

  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const newTask = {
      title: 'Title',
      desc: 'add a description'
    }
    setTaskList([...taskList, newTask]);
  }

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm' color='black'>
        <Button color='black' {...getSubmitButtonProps()}>submit</Button>
        <Button color='black' {...getCancelButtonProps()}>cancel</Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <Button size='sm' color='black' {...getEditButtonProps()}>edit</Button>
      </Flex>
    )
  }

  return (
    <Box bgColor='white' h='100%' w='300px'>
      <Flex flexDir='column' p={2}>
        <Box bg='#542BD1' h='120px' w='100%' p={2} fontSize={20} fontWeight='bold'>
          <Flex>
            <Box>
              Today's Tasks
            </Box>
            <Spacer />
            <Button onClick={addTask}>Add</Button>
          </Flex>
        </Box>
      </Flex>
      <Stack p={2} direction='column' spacing='5px'>
        {taskList.map(task => (
          <Accordion allowToggle color='black' border='1px' borderRadius='8px' borderColor='#D9D9D9'>
            <AccordionItem>
              <Flex>
                <Box textAlign='left' flex='auto'>
                  <Editable defaultValue={task.title}>
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
                <Spacer />
                <Box>
                  <AccordionButton >
                    <AccordionIcon />
                  </AccordionButton>
                </Box>
              </Flex>
              <AccordionPanel pb={4}>
                <Editable
                  defaultValue={task.desc}
                  fontSize='2xl'
                  isPreviewFocusable={false}
                >
                  <EditablePreview />
                  {/* Here is the custom input */}
                  <Input as={EditableInput} />
                  <EditableControls />
                </Editable>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Stack>
    </Box>
  )
}

export default TaskManager