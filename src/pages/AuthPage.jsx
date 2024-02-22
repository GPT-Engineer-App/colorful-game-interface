import React from "react";
import { Box, Button, Container, Heading, Input, Stack, VStack } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Container centerContent>
      <Box p={4}>
        <Heading mb={6}>Sign In</Heading>
        <VStack spacing={4}>
          <Input placeholder="Email address" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="blue" width="full">
            Sign In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default AuthPage;
