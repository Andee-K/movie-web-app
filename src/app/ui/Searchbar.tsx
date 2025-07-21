"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const Searchbar = ({ placeholder }: { placeholder: string }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 w-5/6 mb-8">
      <Image
        src="/assets/icon-search.svg"
        alt="search-icon"
        width={24}
        height={24}
      ></Image>
      <label htmlFor="search-input"></label>
      <input
        type="text"
        id="search-input"
        value={query}
        placeholder={placeholder}
        className="w-full"
        onChange={handleChange}
      ></input>
    </div>
  );
};
