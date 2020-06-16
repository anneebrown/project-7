import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
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
    console.log(this.state.cats)
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
            {/* <Route exact path='/search' render={ () => <SearchForm onSearch={this.performSearch}/>} /> */}
            <Route path='/cats' render={ () => 
              (this.state.catsLoading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.cats} />
            } />
            <Route path='/dogs' render={ () => 
              (this.state.dogsLoading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.dogs} />
            } />
            <Route path='/rainbows' render={ () => 
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