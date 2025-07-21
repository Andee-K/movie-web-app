"use client";
import { useSearchParams } from "next/navigation";
import SearchResult from "./SearchResult";
import React from "react";

export default function PageWithSearch({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  if (query) {
    return <SearchResult />;
  }

  return <>{children}</>;
}
