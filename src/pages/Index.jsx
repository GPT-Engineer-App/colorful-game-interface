import React from "react";
import { Box, Button, Container, Heading, Stack, Text, List, ListItem, ListIcon, Input, VStack, HStack, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPlus, FaUserFriends, FaClock } from "react-icons/fa";

const GameSessionItem = ({ title, participants }) => (
  <ListItem padding={4} borderBottom="1px" borderColor="gray.200" display="flex" justifyContent="space-between" alignItems="center">
    <HStack>
      <ListIcon as={FaUserFriends} color="green.500" />
      <Text fontWeight="semibold">{title}</Text>
    </HStack>
    <Text color="gray.500">{participants.join(", ")}</Text>
  </ListItem>
);

const Countdown = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <HStack spacing={4}>
      <CircularProgress value={secondsLeft} max={initialSeconds} color="green.400">
        <CircularProgressLabel>{`${minutes}:${seconds.toString().padStart(2, "0")}`}</CircularProgressLabel>
      </CircularProgress>
      <Text color="gray.500">Time left to suggest a new game</Text>
    </HStack>
  );
};

const NewSuggestionsCountdown = () => {
  return <Countdown initialSeconds={5 * 60} />;
};

const Index = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} my={10}>
        <Heading color="yellow.400" fontWeight="bold" fontSize="5xl">
          Welcome to GameHub
        </Heading>
        <Text color="gray.500" fontSize="xl" textAlign="center">
          Join an ongoing game session or start something new!
        </Text>

        <Box w="full" bg="gray.100" p={5} borderRadius="md">
          <Heading fontSize="2xl" mb={4} color="green.500">
            Ongoing Sessions
          </Heading>
          <List spacing={3}>
            <GameSessionItem title="Mystery Mansion" participants={["Alice", "Bob", "Charlie"]} />
            <GameSessionItem title="Zombie Outbreak" participants={["Dave", "Eve", "Frank"]} />
            {/* More sessions can be added here */}
          </List>
        </Box>

        <Box w="full" p={5} borderRadius="md" bg="yellow.100">
          <Heading fontSize="2xl" mb={4} color="green.500">
            New Suggestions
          </Heading>
          <NewSuggestionsCountdown />
          <Input placeholder="Suggest a new game..." size="lg" my={4} />
          <Button leftIcon={<FaPlus />} colorScheme="green" size="lg">
            Submit Suggestion
          </Button>
        </Box>

        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaPlus />} colorScheme="yellow" size="lg" variant="solid">
            Create Game Room
          </Button>
          <Button leftIcon={<FaUserFriends />} colorScheme="green" size="lg" variant="outline">
            Join Game Room
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
