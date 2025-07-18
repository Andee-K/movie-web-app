// MediaGrid.tsx
import { DisplayMedia } from "../lib/schemas/media";
import { MediaItem } from "./MediaItem";

type MediaGridProps = {
  mediaList: DisplayMedia[];
};

export const MediaGrid = ({ mediaList }: MediaGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
      {mediaList.map((media) => (
        <MediaItem key={media.id} {...media} />
      ))}
    </div>
  );
};