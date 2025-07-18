import React from 'react'
import Trending from "@/app/ui/Trending";
import Recommended from '../ui/Recommended';

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Trending></Trending>
      <Recommended></Recommended>
    </div>
  )
}
