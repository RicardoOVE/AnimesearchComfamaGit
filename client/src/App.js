import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Search from './components/Search';

const App = () => {

  const [animeList, setAnimeList] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const getAnimeTitle = e => {
        e.preventDefault();
        getAnimeList(searchTitle);
    }

    const getAnimeList = async (title) => {
        const temp = await fetch(`https://api.jikan.moe/v4/search/anime?q=${title}&limit=10`)
            .then(res => res.json());
        console.log(title)
        console.log(temp.results)
        setAnimeList(temp.results);    
    }

  return (
    <div className='container'>
      <Carousel/>
      <Search
        getAnimeList = {getAnimeList}
        searchTitle = {searchTitle}
        setSearchTitle = {setSearchTitle}
        animeList = {animeList}/>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=> <Navbar />} />
        </Switch>
      </BrowserRouter>


    </div>
  )
}

export default App;
