import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";

function Navbar() {
  return (
    <div className="flex items-center w-full p-4 bg-dark-blue z-50 top-0 md:rounded-xl md:w-[98%] md:mx-auto md:mt-4 md:static lg:static lg:w-20 lg:m-4 lg:my-8 lg:flex-col lg:h-[92vh]">
      <div className="flex justify-between w-full lg:flex-col lg:h-screen lg:items-center lg:py-2">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={25}
          height={20}
          className="object-contain"
        ></Image>
        <div className="flex justify-items-center gap-6 my-1 lg:flex-col lg:-mt-120">
          <SVG
            src="/assets/icon-nav-home.svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            description="icon-nav-home"
            className="fill-white hover:fill-white"
          />
          <SVG
            src="/assets/icon-nav-movies.svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            description="icon-nav-movies"
            className="hover:fill-white"
          />
          <SVG
            src="/assets/icon-nav-tv-series.svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            description="icon-nav-tv-series"
            className=""
          />
          <SVG
            src="/assets/icon-nav-bookmark.svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            description="icon-nav-bookmark"
            className=""
          />
        </div>
        <Image
          src="/assets/image-avatar.png"
          alt="avatar-img"
          width={24}
          height={24}
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
}

export default Navbar;
