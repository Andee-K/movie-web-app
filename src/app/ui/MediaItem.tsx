import React from "react";
import Image from "next/image";
import type { Media } from "../lib/schemas/media";

export const MediaItem = ({
  release_date,
  media_type,
  title,
  backdrop_path,
  adult,
}: Media) => {
  const basePath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const year = release_date?.split("-")[0];
  const icon_type =
    media_type === "movie"
      ? "./assets/icon-category-movie.svg"
      : "./assets/icon-category-tv.svg";

  return (
    <div className="flex flex-col gap-2">
      {/* Image Container with Relative Positioning */}
      <div className="relative">
        <Image
          src={basePath}
          alt="media-image"
          width={164}
          height={110}
          className="w-full h-auto object-cover rounded-lg transition-transform group-hover:scale-105"
        />
        
        <button className="absolute top-2 right-2 grid place-items-center w-8 h-8 rounded-full bg-darkest-blue/50">
          <Image
            src="./assets/icon-bookmark-empty.svg"
            width={12}
            height={14}
            alt="bookmark-icon"
            className="opacity-100"
          />
        </button>
      </div>

      <div className="flex gap-2 mb-1 opacity-75 font-light text-xs md:text-lg lg:text-lg">
        <span>{year ? year : "N/A"}</span> •
        <Image
          src={icon_type}
          alt="media-icon"
          width={12}
          height={12}
          className="object-contain"
        ></Image>
        <span>{media_type}</span> •<span>{adult ? "PG13" : "PG"}</span>
      </div>
      <h3>{title ? title : "No Title Available"}</h3>
    </div>
  );
};
