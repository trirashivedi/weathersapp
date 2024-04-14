import React from 'react'

const Search = ({search,setSearch,handleSearch}) => {
  return (
    <div className='search-engine'>
        <input type='text' placeholder='Search city...' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} />

        <button onClick={handleSearch}>Search</button>
    </div>
    
  )
}

export default Search