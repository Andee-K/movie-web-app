import { fetchMedia } from "../lib/tmdb";
import { Media, DisplayMedia } from "../lib/schemas/media";
import { ApiCallType } from "../lib/schemas/media";
import { MediaGrid } from "./MediaGrid";
import { transformMedia } from "../lib/tmdb";

type mediaCatProp = {
  categoryTitle: string;
  apiType: ApiCallType;
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
