import React from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field"; // Replace with your actual path
import { useForm } from "react-hook-form";
import useStore from "../store";

interface EmailAuthProps {
  onSubmit: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const EmailAuth: React.FC<EmailAuthProps> = ({ onSubmit }) => {
  const { setNameAndEmail } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => {
    setNameAndEmail(data.email, data.name); // Update store with email and name
    onSubmit(); // Trigger parent handler
  };

  return (
    <Card.Root maxW="sm" border="none">
      <CardHeader textAlign="center">
        <Text fontSize="md" fontWeight="bold">
          Konichiwa again, bitches! To access this part, you need to input your
          valid email, you will recieve your result there as well.
        </Text>
        <Text fontSize="xs" color="green.500">
          You can only do this once, after that you will not be admitted to this
          part!
        </Text>
      </CardHeader>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <CardBody>
          <Stack>
            <Field
              label="Name"
              required
              invalid={!!errors.name}
              errorText={errors.name?.message}
            >
              <Input
                placeholder="Go60"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </Field>
            <Field
              label="Email Address"
              required
              invalid={!!errors.email}
              errorText={errors.email?.message}
            >
              <Input
                placeholder="me@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </Field>
          </Stack>
        </CardBody>

        <CardFooter display="flex" justifyContent="center" gap={4}>
          <Button bg="green.400" type="submit">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card.Root>
  );
};

export default EmailAuth;
