// import React, { Component } from 'react';
// import './App.css';
// //import axios from 'axios';
// import SearchForm from './Components/SearchForm';
// import Nav from './Components/Nav';
// import PhotoContainer from './Components/PhotoContainer';
// import apiKey from './config';
// import {
//   BrowserRouter, 
//   Route
// } from 'react-router-dom';

// let key = apiKey;

// class App extends Component {
  
//   constructor() {
//     super();
//     this.state = {
//       photos: [],
//       loading: true
//     };
//   }
 
   
//   componentDidMount() {
//     this.performSearch();
//   }

//   performSearch = (query = 'black lives matter') => {
//     fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//       .then(response => response.json())
//       .then(responseData => {
//         this.setState({photos: responseData.photos,
//         loading: false
//         })
//       })
//       .catch( error => {
//         console.log('There was an Error fetching and parsing data', error)
//       })
//   }

//   render() {
//     console.log(typeof this.state.photos)
//     return (
//       <BrowserRouter>
//         <div className="container">
//           <SearchForm onSearch={this.performSearch} />
//           <Nav />
//           {
//               (this.state.loading)
//               ? <p>Loading...</p>
//               : <PhotoContainer data={this.state.photos} />
//             }   
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

// {/* <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// /> */}