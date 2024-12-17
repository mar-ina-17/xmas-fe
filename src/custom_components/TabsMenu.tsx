import React from "react";
import { Box, Tabs } from "@chakra-ui/react";
import RouletteContainer from "../pages/RouletteContainer";

const TabsMenu: React.FC = () => {
  return (
    <Box
      width={{ base: "90%", sm: "50%", md: "40%" }} /* Responsive width */
      height="500px" /* Fixed height for content */
      display="flex"
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Static Tabs List */}
      <Tabs.Root variant="enclosed" fitted defaultValue="roulette">
        <Box position="static">
          <Tabs.List display="flex" justifyContent="space-around">
            <Tabs.Trigger value="roulette">Roulette</Tabs.Trigger>
            <Tabs.Trigger value="shopping_list">Shopping List</Tabs.Trigger>
          </Tabs.List>
        </Box>

        {/* Fixed Content Container */}
        <Box
          flex="1" /* Fills remaining space */
          p={2}
          bg="white"
          overflowY="auto" /* Scrollable if needed */
        >
          <Tabs.Content value="roulette">
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <RouletteContainer />
            </Box>
          </Tabs.Content>
          <Tabs.Content value="shopping_list">
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Manage your projects
            </Box>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
};

export default TabsMenu;
