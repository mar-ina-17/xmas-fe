import { Box } from "@chakra-ui/react";
import TabsMenu from "./custom_components/TabsMenu";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
      <Snowfall />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        p={4}
      >
        <TabsMenu />
      </Box>
    </>
  );
}

export default App;
