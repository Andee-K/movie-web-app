import { fetchMedia } from "../lib/tmdb";
import { Media, DisplayMedia } from "../lib/schemas/media";
import { ApiCallType } from "../lib/schemas/media";
import { MediaGrid } from "./MediaGrid";

type mediaCatProp = {
  categoryTitle: string;
  apiType: ApiCallType;
};

const transformMedia = (media: Media): DisplayMedia => {
  const displayName = media.title || media.name || "No Title Available";
  const year =
    media.release_date?.split("-")[0] ||
    media.first_air_date?.split("-")[0] ||
    "N/A";
  const iconType =
    media.media_type === "movie"
      ? "/assets/icon-category-movie.svg"
      : "/assets/icon-category-tv.svg";
  const rating = media.adult ? "PG13" : "PG";
  const imageSrc = `https://image.tmdb.org/t/p/w500${media.backdrop_path}`;
  const mediaType = media.title ? "Movie" : "TV Series"

  return {
    id: media.id,
    displayName,
    iconType,
    year,
    rating,
    imageSrc,
    mediaType,
  };
};

export const MediaCategory = async ({
  categoryTitle,
  apiType,
}: mediaCatProp) => {
  const getMedia = await fetchMedia(apiType);
  const processedMedia: DisplayMedia[] = getMedia.map((media) => transformMedia(media));

  return (
    <div className="pr-4">
      <h2 className="text-2xl mb-4">{categoryTitle}</h2>
      <MediaGrid mediaList={processedMedia} />
    </div>
  );
};
