"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      color="success"
      style={{ color: "white" }}
      type="submit"
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
