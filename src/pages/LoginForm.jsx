import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <form>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button type="submit" width="full" mt={4} colorScheme="blue">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
