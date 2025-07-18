export type MediaItem = {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: Category;
  rating: Rating;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type ThumbnailSizes = {
  small: string;
  medium?: string;
  large: string;
}

export type Thumbnail = {
  trending?: {
    small: string;
    large: string;
  };
  regular: ThumbnailSizes;
}

export type Category = "Movie" | "TV Series";

export type Rating = "E" | "PG" | "18+";


