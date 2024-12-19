import { Box } from "@chakra-ui/react";
import TabsMenu from "./custom_components/TabsMenu";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => emailjs.init("dewJDFaT2I1geKn_c"), []);

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
