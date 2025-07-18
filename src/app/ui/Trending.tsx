import React from "react";
import { fetchMedia } from "../lib/tmdb";
import TrendingItem from "@/app/ui/TrendingItem";

export default async function Trending() {
  const trendingMovies = await fetchMedia("trending");

  return (
    <div className="grid gap-4">
      <h2 className="font-thin text-2xl">Trending</h2>
      <div className="flex overflow-x-scroll gap-4">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <TrendingItem
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              media_type={movie.media_type}
              backdrop_path={movie.backdrop_path}
              adult={movie.adult}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
