import React, { useState } from "react";
import { Box, Button, Spinner, Text, Card, CardBody } from "@chakra-ui/react";
import JSConfetti from "js-confetti";
import useStore from "../store";

const GenderSelector: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("black");
  const [result, setResult] = useState<string | null>(null);
  const jsConfetti = new JSConfetti();
  const { name } = useStore();

  const options = ["Male", "Female"];

  const handleButtonClick = () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const randomResult = options[Math.floor(Math.random() * options.length)];
      setResult(randomResult);
      setColor(randomResult[0] === "M" ? "#00BFFF" : "pink");
      setLoading(false);
      jsConfetti.addConfetti();
    }, 2000);
  };

  return (
    <Card.Root
      border="none"
      maxW="sm"
      height="400px" /* Set card height */
      mx="auto"
      boxShadow="none"
      borderRadius="lg"
    >
      <CardBody
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        height="100%" /* Ensures full height of the card */
      >
        <Box>
          {loading ? (
            <section>
              <Text fontSize="xl" mb={4}>
                {name}, you get to buy a present for a...
              </Text>
              <Spinner size="xl" color="red.500" />
            </section>
          ) : (
            !result && (
              <Button
                variant="solid"
                color="white"
                bg="red.500"
                size="lg"
                fontWeight="700"
                onClick={handleButtonClick}
                disabled={loading}
              >
                Are you curious?
              </Button>
            )
          )}
          {result && (
            <Box mt="-50%">
              <Text fontSize="2xl" fontWeight="bold" color={color}>
                {result}
              </Text>
            </Box>
          )}
        </Box>
      </CardBody>
    </Card.Root>
  );
};

export default GenderSelector;
