import { Box, Button, Link, Text } from "@chakra-ui/react";

const ShoppingTab = () => {
  return (
    <Box
      p={4}
      overflowY="auto"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center" width="100%" maxW="md">
        <Text color="black" fontSize="lg" fontWeight="bold" mb={4}>
          The shopping list cannot be displayed here due to browser
          restrictions. Please use the link below to open it.
        </Text>
        <Button size="md" mb={6} width="full" colorScheme="red.400">
          <Link
            href="https://docs.google.com/spreadsheets/d/1-xrWOlJCvS4XuMO7lpRDa7qUaJQfbtKeZpbEmWbiqoA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            color="red.400"
          >
            Open Shopping List in Google Sheets
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default ShoppingTab;
