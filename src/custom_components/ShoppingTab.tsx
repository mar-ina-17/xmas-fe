import { Box } from "@chakra-ui/react";

const ShoppingTab = () => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1-xrWOlJCvS4XuMO7lpRDa7qUaJQfbtKeZpbEmWbiqoA/edit?usp=sharing"
        style={{ width: "100%", height: "600px", border: "none" }}
        title="Shopping List"
      ></iframe>
    </Box>
  );
};

export default ShoppingTab;
