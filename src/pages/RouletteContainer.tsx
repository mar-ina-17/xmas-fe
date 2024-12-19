import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import EmailDialog from "../custom_components/Auth";
import GenderSelector from "../custom_components/Roulette";

const RouletteContainer: React.FC = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    setIsEmailSubmitted(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box justifyContent="center" alignItems="center" height="100vh">
        {!isEmailSubmitted ? (
          <EmailDialog onSubmit={handleEmailSubmit} />
        ) : (
          <GenderSelector />
        )}
      </Box>
    </Box>
  );
};

export default RouletteContainer;
