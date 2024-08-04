import {
  Input, Flex, Box, AbsoluteCenter, Button, Select, Image
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';


const Timer = (props) => {
  const MAX_SECS = 59;
  const MAX_MINS = 179;

  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [time, setTime] = useState(0);
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);

  const startTimer = () => {
    setTime(minutes * 60 + seconds)
  }

  useEffect(() => {
    if (time > 0 && sessionActive) {
      const timerId = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (time == 0 && sessionActive) {
      setSessionActive(false);
      setSessionComplete(true);
    }
  }, [time, sessionActive]);

  const handleSecondsInput = (e) => {
    let val = e.target.value;
    if (val == '') { setSeconds(0) }
    else {
      val = parseInt(val);
      setSeconds((val < MAX_SECS) ? val : MAX_SECS);
    }
  }

  const handleMinutesInput = (e) => {
    let val = e.target.value;
    if (val == '') { setMinutes(0) }
    else {
      val = parseInt(val);
      setMinutes((val < MAX_MINS) ? val : MAX_MINS);
    }
  }

  return (
    <Box position='relative' h='100%' w='100%' >
      <Flex align="center" flexDir="column">
        <Box color='black' border='1px' borderRadius='5px' bg='white' w='500px' h='250px' fontWeight='bold'>
          <Flex alignItems='center' flexDir='column'>
            <Box fontSize='36px'>Ready to Focus?</Box>
            <Box>
              <Flex fontSize='72px' >
                {sessionActive ? (
                  <Box>
                    {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
                  </Box>
                ) : (
                  <>
                    <Input textAlign='right' fontWeight='bold' fontSize='72px' variant='unstyled' type='number' onChange={handleMinutesInput} max={MAX_MINS} value={minutes} ></Input>
                    :
                    <Input fontWeight='bold' fontSize='72px' variant='unstyled' type='number' onChange={handleSecondsInput} max={MAX_SECS} value={seconds} ></Input>
                  </>
                )}
              </Flex>
            </Box>
            {sessionActive ? (
              <Button
                bg="red.200"
                onClick={() => {
                  setTime(0);
                }}
              >STOP</Button>

            ) : (
              <Button
                bg="gray.200"
                onClick={() => {
                  startTimer();
                  setSessionActive(true);
                }}
              >START</Button>
            )}
            <Box>
              <Flex alignItems='center'>
                <Box p="5px">Task</Box>
                <Select variant="flushed" w="200px" placeholder='Select task'>
                  {props.taskList.map(task => (
                    <option value={task.index}>{(task.title == '') ? `Task ${task.index}` : task.title}</option>

                  ))}
                </Select>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
        {sessionComplete ? (<Flex>
          <Box w="500px">
          <Image src='../../../public/images/graph.png' />
        </Box>
        <Box  w="300px">
        <Image src='../../../public/images/pie.png' />
      </Box></Flex>
        ) : (<Box></Box>)}
        </Box>
      </Flex>
    </Box>
  );
}

export default Timer;