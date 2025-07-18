import React from "react";
import Navbar from "@/app/ui/Navbar";
import { Searchbar } from "../ui/Searchbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col pt-24 pl-4 bg-darkest-blue text-white">
        <Searchbar></Searchbar>
        {children}
      </div>
    </>
  );
}

export default Layout;
