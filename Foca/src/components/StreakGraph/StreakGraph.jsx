import { Box, SimpleGrid, Tooltip } from '@chakra-ui/react';

// Mock data for demonstration (replace with real data)
const mockData = Array(365)
  .fill(0)
  .map(() => Math.floor(Math.random() * 8));

const StreakGraph = ({ data = mockData }) => {
  // Calculate the max value for color intensity
  const maxHours = Math.max(...data);

  // Create an array of weeks with 7 days each
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <Box overflowX='hidden' overflowY='hidden' p={2} border={'2px solid'} borderColor='gray.100'>
      <SimpleGrid columns={weeks.length} spacing={1}>
        {weeks.map((week, weekIndex) => (
          <SimpleGrid key={weekIndex} rows={7} spacing={1}>
            {week.map((hours, dayIndex) => {
              const intensity = maxHours > 0 ? (hours / maxHours) * 30 : 0; // Need to figure out how to make 0 hours not blend in with the background black
              const bgColor = `hsl(120, 100%, ${intensity}%)`;

              return (
                <Tooltip key={dayIndex} label={`${hours} hours`} aria-label={`${hours} hours of productive work`}>
                  <Box w='12px' h='12px' bg={bgColor} borderRadius='3' borderWidth='1px' borderColor='gray.900' />
                </Tooltip>
              );
            })}
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StreakGraph;
