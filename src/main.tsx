import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider forcedTheme="light">
        <Theme appearance="light" background="">
          <App />
        </Theme>
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
