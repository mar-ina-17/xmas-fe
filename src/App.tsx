import { useState } from "react";
import { Box, Tabs } from "@chakra-ui/react";
import GenderSelector from "./custom_components/Roulette";
import TabsMenu from "./custom_components/TabsMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" /* Center vertically */
      width="100vw" /* Full width */
      p={4}
    >
      <TabsMenu />
    </Box>
  );
}

export default App;
