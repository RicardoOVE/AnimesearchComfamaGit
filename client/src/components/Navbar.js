import React, { useEffect, useState } from "react";
import axios from "axios";

import '../index.css';

const Navbar = () => {

    return (
        <div className="w-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img className="ml-1" src="/images/icons/anime.png" alt="logo" width="65"/>
                        <div className="ml-2"><b>AnimeSearch</b></div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Mangas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Premium</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-dark">Login</button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;