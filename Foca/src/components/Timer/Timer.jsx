import { Box, AbsoluteCenter } from "@chakra-ui/react";
import {useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(new Date(0, 0, 0, 0, 2, 100));

    // const startTimer = (mins, secs) => {
    //     setTime(new Date(0, 0, 0, 0, mins, secs))
    // }

    // useEffect(() => {
    //     if (time > 0) {
    //       const timerId = setInterval(() => {
    //         setTime(time - 1);
    //       }, 1000);
    
    //       return () => clearInterval(timerId);
    //     }
    //   }, [time]);
    
    return(
        <Box position='relative' h='100%' w='100%' >
            <AbsoluteCenter axis='both'>
                <Box color='black' border='1px' bg='white' w='100px' h='100px'>{time.getSeconds()}</Box>
            </AbsoluteCenter>
        </Box>
    );
}

export default Timer;