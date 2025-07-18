import { MediaList, mediaSchemaList, ApiCallType } from "./schemas/media";

const baseUrl="https://api.themoviedb.org/3/";

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
    // console.log(parsedData);
    return parsedData;
  } catch (error) {
    console.error("fetchMedia error:", error);
    throw error;
  }
}
