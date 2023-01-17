import React, { useEffect, useState } from "react";
import axios from "axios";

import '../index.css';

const SearchResults = () => {

    return (
        <div className="w-100">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchResults;