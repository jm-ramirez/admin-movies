import React from 'react'

export const Search = () => {
  return (
    <div className="search">
        <h3 className="title">Search</h3>
        <form>
            <input type="text" id="search_field" />
            <button id="search">Search</button>
        </form>
    </div>
  )
}
