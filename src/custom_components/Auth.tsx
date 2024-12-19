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
  NativeSelectField,
  NativeSelectRoot,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { useForm } from "react-hook-form";
import useStore from "../store";
import useFetchPeople from "../hooks/useFetchPeople";

interface EmailAuthProps {
  onSubmit: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const EmailAuth: React.FC<EmailAuthProps> = ({ onSubmit }) => {
  const { setNameAndEmail } = useStore();
  const { people } = useFetchPeople();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onFormSubmit = (data: FormValues) => {
    setNameAndEmail(data.email, data.name);
    onSubmit();
  };

  return (
    <Card.Root maxW="sm" border="none">
      <CardHeader textAlign="center">
        <Text fontSize="md" fontWeight="bold">
          Hello! To access this part, you need to input your valid email, you
          will recieve your result there as well.
        </Text>
        <Text fontSize="xs" color="green.500">
          You can only do this once, after that your name will removed from the
          list below!
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
              <NativeSelectRoot>
                <NativeSelectField
                  {...register("name", { required: "Name is required" })}
                >
                  <option value="">Select your name</option>
                  {people
                    .filter((person) => !person.email)
                    .map((person, idx) => (
                      <option key={idx} value={person.name}>
                        {person.name}
                      </option>
                    ))}
                </NativeSelectField>
              </NativeSelectRoot>
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
          <Button bg="red.400" fontWeight="700" type="submit">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card.Root>
  );
};

export default EmailAuth;
