// TaskEditModal.js
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  useStyleConfig,
} from '@chakra-ui/react';

const TaskEditModal = ({ isOpen, onClose, selectedTask, handleTitleChange, handleDescChange, editTask }) => {
  const styles = useStyleConfig('TaskManager');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={styles.modalContent}>
        <ModalHeader>Edit Task {selectedTask.index}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Task Title</FormLabel>
            <Stack spacing='10px'>
              <Input placeholder='Title' value={selectedTask.title} onChange={handleTitleChange} sx={styles.input} />
              <Textarea
                placeholder='Task Description'
                value={selectedTask.desc}
                onChange={handleDescChange}
                sx={styles.textarea}
              />
            </Stack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              editTask();
              onClose();
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
  );
};

export default TaskEditModal;
