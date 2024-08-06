'use client'

import React, { useState } from 'react'
import SearchDashboard from './_components/SearchDashboard'
import TemplateList from './_components/TemplateList'

const page = () => {

  const [searchInput, setSearchInput] = useState<string>()

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput}/>
      <TemplateList searchInput={searchInput as string}/>
    </div>
  )
}

export default page
