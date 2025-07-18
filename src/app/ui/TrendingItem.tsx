import React from "react";
import Image from "next/image";
import { Media } from "../lib/schemas/media";

const TrendingItem = ({ title, release_date, media_type, backdrop_path, adult }: Media) => {
  const basePath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const year = release_date?.split("-")[0];
  const icon_type =
    media_type === "movie"
      ? "./assets/icon-category-movie.svg"
      : "./assets/icon-category-tv.svg";

  return (
    <div
      className="flex flex-col justify-end relative p-4 bg-cover w-[240px] h-[140px] rounded-lg"
      style={{ backgroundImage: `url(${basePath})` }}
    >
      <button className="grid place-items-center absolute top-2 right-2 bg-darkest-blue/50 w-8 h-8 rounded-full">
        <img
          src="./assets/icon-bookmark-empty.svg"
          width={12}
          height={14}
          alt="bookmark-icon"
          className="opacity-100"
        ></img>
      </button>
      <div className="flex gap-2 mb-1 opacity-75 font-light text-xs">
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

export default TrendingItem;
