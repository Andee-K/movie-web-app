import React from "react";
import Navbar from "@/app/ui/Navbar";
import { Searchbar } from "../ui/Searchbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row bg-darkest-blue">
      <Navbar></Navbar>
      <div className="flex flex-col pt-6 pl-4 text-white lg:pt-12">
        <Searchbar placeholder="Search for movies or TV series"></Searchbar>
        {children}
      </div>
    </div>
  );
}

export default Layout;
