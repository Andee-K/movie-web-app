"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MediaGrid } from "./MediaGrid";
import { transformMedia } from "../lib/tmdb";
import { Media, DisplayMedia } from "../lib/schemas/media";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [data, setData] = useState<Media[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  if (!query) return null;
  if (loading) return <div className="mb-8">Searching...</div>;
  if (!data || data.length === 0) {
    return <div className="mb-8">No results found for "{query}".</div>;
  }

  const processedMedia: DisplayMedia[] = data.map(transformMedia);

  return (
    <div className="pr-4 mb-8">
      <h2 className="text-2xl mb-4">Found {processedMedia.length} result{processedMedia.length !== 1 ? "s" : ""} for "{query}"</h2>
      <MediaGrid mediaList={processedMedia} />
    </div>
  );
};

export default SearchResult;
