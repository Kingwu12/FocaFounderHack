import { useState } from 'react';
import axios from 'axios';
import { Button, Box, Image } from '@chakra-ui/react';

const TimerComponent = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [graphUrl, setGraphUrl] = useState('');

  const startTimer = async () => {
    try {
      // await axios.post('http://localhost:5000/start-timer', { duration: 25 });
      const response = await axios.post('http://localhost:5000/start-timer', { duration: 25 });
      setTimerRunning(true);
      setTimeout(fetchGraph, 25 * 60 * 1000); // Fetch graph after 25 minutes
    } catch (error) {
      console.error('Error starting timer:', error);
    }
  };

  const fetchGraph = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-graph', { responseType: 'blob' });
      const url = URL.createObjectURL(new Blob([response.data]));
      setGraphUrl(url);
      setTimerRunning(false);
    } catch (error) {
      console.error('Error fetching graph:', error);
    }
  };

  return (
    <Box>
      <Button onClick={startTimer} isDisabled={timerRunning}>
        {timerRunning ? 'Timer Running...' : 'Start Timer'}
      </Button>
      {graphUrl && (
        <Box mt={4}>
          <Image src={graphUrl} alt='Graph' />
        </Box>
      )}
    </Box>
  );
};

export default TimerComponent;
