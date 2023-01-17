import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

const App = () => {

  const [animeList, setAnimeList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

    const getAnimeTitle = e => {
      e.preventDefault();
      console.log(searchTitle)
      getAnimeList(searchTitle);
    }

    const getAnimeList = async (title) => {
      const temp = await fetch(`https://api.jikan.moe/v4/search/anime?q=${title}&limit=10`)
        .then(res => res.json());
      setAnimeList(temp.results);    
    }

  return (
    <div className='container'>
      <Carousel/>
      <SearchResults getAnimeTitle={getAnimeTitle} searchTitle={searchTitle} setSearchTitle={setSearchTitle} animeList={animeList}/>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=> <Navbar />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
