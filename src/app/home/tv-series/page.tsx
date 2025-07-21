import React from 'react'
import { MediaCategory } from '@/app/ui/MediaCategory'
import PageWithSearch from '@/app/ui/PageWithSearch'

export default function Page() {
  return (
    <PageWithSearch>
      <MediaCategory categoryTitle="TV Series" apiType="tv"></MediaCategory>
    </PageWithSearch>
  )
}
