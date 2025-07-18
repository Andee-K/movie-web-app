import React from 'react'
import { MediaGrid } from './MediaGrid'
import { fetchMedia } from '../lib/tmdb'

export default async function Recommended() {
    const recommendedMovies = await fetchMedia("recommended");
    console.log(recommendedMovies)
  return (
    <div className="pr-4">
        <h2 className='text-2xl mb-4'>Recommended for you</h2>
        <MediaGrid mediaList={recommendedMovies}></MediaGrid>
    </div>
  )
}
