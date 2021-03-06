//import statements for all parts that the app class needs, like the components, and react functionality
import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import apiKey from './config';
import {
  BrowserRouter, 
  Route,
  Switch
} from 'react-router-dom';

let key = apiKey;

class App extends Component {
  
  //state includes a general photos state for the search and the pictures displayed by default with a loading state, as well as a picture and loading state for each default topic
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      rainbows: [],
      loading: true,
      catsLoading: true,
      dogsLoading: true,
      rainbowsLoading: true,
    };
  }
 
   
  componentDidMount() {
    this.performSearch();
    this.catSearch();
    this.dogSearch();
    this.rainbowSearch();
  }

  //search functions for general search and default searches
  performSearch = (query = 'black lives matter') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({photos: responseData.photos,
        loading: false
        })
      })
      .catch( error => {
        console.log('There was an Error fetching and parsing data', error)
      })
    }

 catSearch = (query = 'cats') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({cats: responseData.photos,
         catsLoading: false
        })
      })
       .catch( error => {
         console.log('There was an Error fetching and parsing data', error)
       })
    }

 dogSearch = (query = 'dogs') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({dogs: responseData.photos,
          dogsLoading: false
        })
    })
      .catch( error => {
         console.log('There was an Error fetching and parsing data', error)
       })
  }

 rainbowSearch = (query = 'rainbows') => {
   fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => response.json())
     .then(responseData => {
       this.setState({rainbows: responseData.photos,
        rainbowsLoading: false
      })
    })
    .catch( error => {
      console.log('There was an Error fetching and parsing data', error)
      })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path='/' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }   />
            <Route exact path='/search/:query' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }    />
            <Route exact path='/cats' render={ () => 
              (this.state.catsLoading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.cats} />
            } />
            <Route exact path='/dogs' render={ () => 
              (this.state.dogsLoading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.dogs} />
            } />
            <Route exact path='/rainbows' render={ () => 
              (this.state.rainbowsLoading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.rainbows} />
            } />
             <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;