import { MediaList, mediaSchemaList, ApiCallType, Media, DisplayMedia } from "./schemas/media";

const baseUrl="https://api.themoviedb.org/3/";

// Server component
export async function fetchMedia(media_type: ApiCallType): Promise<MediaList> {
  let api_type = ""

  switch(media_type) {
    case "trending":
      api_type = "trending/all/week";
      break;
    case "recommended":
      api_type = "trending/all/day"; // change later to bookmarked values
      break;
    case "movies":
      api_type= "movie/popular";
      break;
    case "tv":
      api_type = "tv/popular"
      break;
  }
  const url = `${baseUrl}${api_type}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();
    const parsedData = mediaSchemaList.parse(data.results ?? []);
    return parsedData;
  } catch (error) {
    console.error("fetchMedia error:", error);
    throw error;
  }
}

// Function for constructing data from API
export const transformMedia = (media: Media): DisplayMedia => {
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
