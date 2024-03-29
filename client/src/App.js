import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useState } from "react";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

const App = () => {

  //const [rawData, setRawData] = useState({});
  const [animeList, setAnimeList] = useState([]);
  const [animeCount, setAnimeCount] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

    const getAnimeTitle = e => {
      e.preventDefault();
      getAnimeList(searchTitle);
    }

    /*
    const sendRawData = async () => {
      const response = await fetch("http://localhost:8000/api/score/"+ data, {
        method: "POST",
        body: JSON.stringify({
        
      } ),
      });
      const data = await response.json();
      console.log(data); 
    };
    

    const getAnimeList = async (title) => {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${title}&limit=15`)
        .then(res => res.json());
      setAnimeList(response.data);
      setAnimeCount(response.pagination.items.total)
    }
    
    const [data, setData] = useState("");

    const callAPI = async () => {
      const response = await fetch("http://localhost:8000/api")
        .then((res) => res.text())
        setData(response)
    }
    */

    const getAnimeList = async (title) => {
      const response = await fetch(`http://localhost:8000/animes/search?q=${title}`)
          .then(res => res.json());
      setAnimeList(response);
      setAnimeCount(response.length)
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
