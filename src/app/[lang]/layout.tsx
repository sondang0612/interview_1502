"use client";
import QueryProvider from "@/libs/providers/QueryProvider";
import "@/styles/global.css";
import { Params } from "@/types";
import { useParams } from "next/navigation";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<Params>();

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
