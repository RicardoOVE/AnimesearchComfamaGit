import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';

const SearchResults = props => {

    return (
        <div>
            <form class="d-flex justify-content-center py-4" onSubmit={props.getAnimeTitle}>
                <input class="form-control w-50" type="search" placeholder="Search an anime title ..." required value={props.searchTitle} onChange={e => props.setSearchTitle(e.target.value)}/>
                <button class="btn btn-outline-warning" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchResults;