import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SearchResults = props => {

    const responsive = {

        //Using react-multi-carousel
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <form className="d-flex justify-content-center py-4" onSubmit={props.getAnimeTitle}>
                <input className="form-control w-25" type="search" placeholder="Search an anime title ..." required value={props.searchTitle} onChange={e => props.setSearchTitle(e.target.value)}/>
                <button className="btn btn-outline-warning mx-2" type="submit">Search</button>
            </form>

            {
                props.animeCount > 0 ? (
                    <Carousel responsive={responsive}>
                        {props.animeList.map((show, index)=>(
                            <div className="card mx-2 text-center" key={index} style={{width: '11rem', height: '30rem', overflow: 'hidden'}}>
                                <img className="card-img-top" style={{height: '18rem', objectFit: 'cover'}} src={show.images.jpg.large_image_url} alt="Card image cap"></img>
                                <div>
                                    <h5>{show.title}</h5>
                                    <p>Score: {show.score}</p>
                                    <p className="mt-auto">Review: {show.scoreReview}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
            ):''
            }

            
            <div className="text-white text-center">
                <h1 className="text-white"> {props.animeCount > 0 ? 'Top 15' : ''}</h1>
                <p>Searching: {props.searchTitle}</p>
                <p>Total shows: {props.animeCount > 0 ? props.animeCount : ''}</p>
            </div>
            
            <div className="d-flex row justify-content-center"> 
            {
                    props.animeList.length > 0 ? (
                        props.animeList.sort((a, b) => {
                            return b.score - a.score
                        }).map((show, index) => (
                            <div className="card mx-2 my-2" style={{width: '22rem', flexDirection: 'row'}} key={index}>
                                <img src={show.images.jpg.large_image_url} className="card-img-top" alt="image" style={{width: '50%', objectFit: 'cover'}}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{show.title}</h5>
                                    <p className="card-text">Score: {show.score}</p>
                                    <p className="card-text">Review: {show.scoreReview}</p>
                                </div>
                            </div>

                        ))) : ''
                }
            </div>
            <div>
            </div>
        </div>
    )
}

export default SearchResults;