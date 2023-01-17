import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <div className='container'>
      <Carousel/>
      <SearchResults />
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=> <Navbar />} />
        </Switch>
      </BrowserRouter>


    </div>
  )
}

export default App;
