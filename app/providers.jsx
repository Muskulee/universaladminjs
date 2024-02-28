"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useRouter } from "next/navigation";

export function Providers({ children }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </Provider>
  );
}
