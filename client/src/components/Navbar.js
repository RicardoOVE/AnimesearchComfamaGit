import React, { useEffect, useState } from "react";
import axios from "axios";

import '../index.css';

const Navbar = () => {

    return (
        <div className="w-100">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand d-flex align-items-center" href="/">
                        <img className="ml-1" src="/images/icons/anime.png" alt="logo" width="65"/>
                        <div className="ml-2"><b>AnimeSearch</b></div>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ml-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Shows</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Mangas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Premium</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-dark">Login</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;