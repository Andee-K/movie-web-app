import React from "react";
import Image from "next/image";

export const Searchbar = () => {
  return (
    <div className="flex gap-2 w-5/6 mb-8">
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
        placeholder="Search for movies or TV series"
        className="w-full"
      ></input>
    </div>
  );
};
