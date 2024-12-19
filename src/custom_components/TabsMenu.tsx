import React, { useState } from "react";
import { Box, Tabs } from "@chakra-ui/react";
import RouletteContainer from "../pages/RouletteContainer";
import { FaGifts } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import ShoppingTab from "./ShoppingTab";

const TabsMenu: React.FC = () => {
  const [activeTab, setActiveValue] = useState<string | null>("roulette");
  return (
    <Box
      width={{ base: "90%", sm: "70%", md: "40%" }} /* Responsive width */
      height="500px" /* Fixed height for content */
      display="flex"
      flexDirection="column"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
    >
      {/* Static Tabs List */}
      <Tabs.Root
        variant="enclosed"
        fitted
        defaultValue="roulette"
        value={activeTab}
        onValueChange={(e) => setActiveValue(e.value)}
      >
        <Box position="static">
          <Tabs.List display="flex" justifyContent="space-around">
            <Tabs.Trigger
              value="roulette"
              m={2}
              color={activeTab === "roulette" ? "white" : "green.400"}
              bg={activeTab === "roulette" ? "green.400" : "gray.200"}
              fontWeight="900"
            >
              <FaGifts />
              Roulette
            </Tabs.Trigger>
            <Tabs.Trigger
              value="shopping_list"
              m={2}
              color={activeTab === "shopping_list" ? "white" : "green.400"}
              bg={activeTab === "shopping_list" ? "green.400" : "gray.200"}
              fontWeight="900"
            >
              <FaCartShopping />
              Shopping
            </Tabs.Trigger>
          </Tabs.List>
        </Box>

        {/* Fixed Content Container */}
        <Box overflowY="auto" bg="white">
          <Tabs.Content value="roulette">
            <RouletteContainer />
          </Tabs.Content>
          <Tabs.Content value="shopping_list">
            <ShoppingTab />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
};

export default TabsMenu;
