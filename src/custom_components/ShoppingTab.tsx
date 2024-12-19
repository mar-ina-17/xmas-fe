import { Box, Button, Link, Text } from "@chakra-ui/react";

const ShoppingTab = () => {
  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
        If you cant edit or see the shopping ;ist here, you can click on the
        link below
      </Text>
      <Button
        rel="noopener noreferrer"
        colorScheme="teal"
        size="lg"
        mb={6}
        width="full"
      >
        <Link
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1-xrWOlJCvS4XuMO7lpRDa7qUaJQfbtKeZpbEmWbiqoA/edit?usp=sharing"
        >
          Open Shopping List in Google Sheets
        </Link>
      </Button>
      <Box
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        overflow="hidden"
      >
        <iframe
          src="https://docs.google.com/spreadsheets/d/1-xrWOlJCvS4XuMO7lpRDa7qUaJQfbtKeZpbEmWbiqoA/edit?usp=sharing"
          style={{ width: "100%", height: "600px", border: "none" }}
          title="Shopping List"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ShoppingTab;
