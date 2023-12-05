import './SearchBox.css'
import React, { useState } from 'react'

export default function SearchBox(props) {
    const [searchText, setSearchText] = useState("");


    const handleSearch = (e) => {
        e.preventDefault()
        props.getSearchResult(searchText)
    }
    const clear = (e) => {
        e.preventDefault()
        setSearchText("")
        props.clear()
    }
    return (
        <div className="SearchBox">
            <form className="form">
                <input
                    type="text"
                    value={searchText}
                    name="username"
                    placeholder='Search for a course'
                    onChange={(e) => setSearchText(e.target.value)}
                    required />
                <button className="button-2" onClick={handleSearch}>
                    Search
                </button>
                <button className="button-1 clear" onClick={clear}>
                    Clear
                </button>
            </form>
        </div>
    )

}