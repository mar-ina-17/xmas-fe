import { Box } from "@chakra-ui/react";
import TabsMenu from "./custom_components/TabsMenu";

function App() {
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
