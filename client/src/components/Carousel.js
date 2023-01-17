import React, { useEffect, useState } from "react";
import axios from "axios";

import '../index.css';

import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"

const Carousel = () => {

    const animecarousel = [img1, img2, img3, img4];
    const delay = 6000;
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === animecarousel.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="container-fluid">
            <div className="fixed-top" style={{backgroundColor: "#d4af37", width: "100%", height: "20px", marginTop: '90px'}}></div>

            <div className="slideshow">
                <div className="slideshowSlider " style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {animecarousel.map((animeimage, index) => (
                    <div className="slide "  key={index}>
                        <img src={animeimage} alt="animebanner" style={{maxWidth: "100%"}}/>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{backgroundColor: "#d4af37", width: "100%", height: "20px"}}></div>
        </div>
    )
}

export default Carousel;