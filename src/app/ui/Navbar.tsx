import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center fixed w-full p-4 bg-dark-blue z-50">
      <div className="flex justify-between w-full">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={25}
          height={20}
          className="object-contain"
        ></Image>
        <div className="flex justify-items-center gap-6 my-1">
          <Image
            src="/assets/icon-nav-home.svg"
            alt="icon-nav-home"
            width={16}
            height={16}
            className="object-contain"
          ></Image>
          <Image
            src="/assets/icon-nav-movies.svg"
            alt="icon-nav-movies"
            width={16}
            height={16}
            className="object-contain"
          ></Image>
          <Image
            src="/assets/icon-nav-tv-series.svg"
            alt="icon-nav-tv-series"
            width={16}
            height={16}
            className="object-contain"
          ></Image>
          <Image
            src="/assets/icon-nav-bookmark.svg"
            alt="icon-nav-bookmark"
            width={16}
            height={16}
            className="object-contain"
          ></Image>
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
