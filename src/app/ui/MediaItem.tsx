// MediaItem.tsx
import React from "react";
import Image from "next/image";
import { DisplayMedia } from "../lib/schemas/media";

export const MediaItem = ({
  displayName,
  iconType,
  year,
  rating,
  imageSrc,
  mediaType,
}: DisplayMedia) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full aspect-[164/110]">
        {imageSrc && !imageSrc.endsWith("null") ? (
          <Image
            src={imageSrc}
            alt="media-image"
            fill
            className="object-cover rounded-lg transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
            <span className="text-xs text-gray-400">Poster not available</span>
          </div>
        )}
        {/* <button className="absolute top-2 right-2 grid place-items-center w-8 h-8 rounded-full bg-darkest-blue/50">
          <Image
            src="/assets/icon-bookmark-empty.svg"
            width={12}
            height={14}
            alt="bookmark-icon"
            className="opacity-100"
          />
        </button> */}
      </div>

      <div className="flex gap-2 mb-1 opacity-75 font-light text-xs md:text-lg">
        <span>{year}</span> •
        <Image
          src={iconType}
          alt="media-icon"
          width={12}
          height={12}
          className="object-contain"
        /> 
        <span>{mediaType}</span> •
        <span>{rating}</span>
      </div>
      <h3 className="text-lg md:text-xl">{displayName}</h3>
    </div>
  );
};
