"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider basePath="/api/auth">
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
