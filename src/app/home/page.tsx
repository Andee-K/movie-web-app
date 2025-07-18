import React from 'react'
import Trending from "@/app/ui/Trending";
import { MediaCategory } from '../ui/MediaCategory';

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Trending></Trending>
      <MediaCategory categoryTitle="Recommended for you" apiType="recommended"></MediaCategory>
    </div>
  )
}
