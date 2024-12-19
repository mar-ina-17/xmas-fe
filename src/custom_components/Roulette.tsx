import React, { useState } from "react";
import {
  Box,
  Button,
  Spinner,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import JSConfetti from "js-confetti";
import useStore from "../store";
import useRandomGender from "../hooks/useRandomResult";
import santaImage from "../assets/santa.png";
import Snowfall from "react-snowfall";
import useRemovePerson from "../hooks/useRemovePerson";
import useEmailSend from "../hooks/useEmailSend";

const GenderSelector: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("black");
  const [result, setResult] = useState<string | null>(null);
  const jsConfetti = new JSConfetti();
  const { name, email } = useStore();
  const { gift_to } = useRandomGender();
  const { removePerson } = useRemovePerson();
  const { sendEmail } = useEmailSend({
    name: name,
    gift_to: gift_to,
    email: email,
  });

  const handleButtonClick = () => {
    console.log(gift_to);
    if (!gift_to) {
      console.error("Error: gift_to is not defined or null.");
      return;
    }

    console.log("Button clicked. Gift to:", gift_to);

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      console.log("Setting result and color...");
      setResult(gift_to);
      setColor(gift_to[0] === "m" ? "#00BFFF" : "#FF69B4");
      setLoading(false);

      try {
        jsConfetti.addConfetti();
      } catch (error) {
        console.error("Error adding confetti:", error);
      }

      try {
        removePerson();
      } catch (error) {
        console.error("Error removing person:", error);
      }

      // Uncomment this when testing email sending
      // try {
      //   sendEmail();
      // } catch (error) {
      //   console.error("Error sending email:", error);
      // }
    }, 2000);
  };

  return (
    <Card.Root
      border="none"
      maxW="sm"
      height="400px"
      mx="auto"
      boxShadow="none"
      borderRadius="lg"
      bg="gray.50"
    >
      <CardBody
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        height="100%"
      >
        <Snowfall />
        <Box>
          {loading ? (
            <section>
              <Text fontSize="lg" mb={4}>
                {name}, you get to buy a present for a...
              </Text>
              <Spinner size="xl" color="red.500" />
            </section>
          ) : (
            !result && (
              <Button
                variant="solid"
                color="white"
                bg="green.400"
                size="lg"
                fontWeight="700"
                onClick={handleButtonClick}
                zIndex="10" // Ensure button is clickable
              >
                Are you curious?
              </Button>
            )
          )}
          {result && (
            <Box width="100%">
              <Text
                fontSize="4xl"
                fontWeight="bold"
                color={color}
                bg="gray.200"
                p={2}
                borderRadius={6}
              >
                {result.toUpperCase()}
              </Text>
            </Box>
          )}
        </Box>
      </CardBody>
      <Image src={santaImage} alt="Santa Claus" width="100%" height="200px" />
    </Card.Root>
  );
};

export default GenderSelector;
