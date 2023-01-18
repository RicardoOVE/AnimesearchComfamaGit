import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

const App = () => {

  const [animeList, setAnimeList] = useState([]);
  const [animeCount, setAnimeCount] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

    const getAnimeTitle = e => {
      e.preventDefault();
      getAnimeList(searchTitle);
    }

    const getAnimeList = async (title) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${title}&limit=15`)
        .then(res => res.json());
      setAnimeList(response.data);
      setAnimeCount(response.pagination.items.total)
    }

  return (
    <div className='container'>
      <Carousel/>
      <SearchResults getAnimeTitle={getAnimeTitle} searchTitle={searchTitle} setSearchTitle={setSearchTitle} animeList={animeList} animeCount={animeCount}/>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=> <Navbar />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
