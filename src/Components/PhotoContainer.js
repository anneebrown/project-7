import React from 'react';
import Photo from './Photo';
//import { render } from '@testing-library/react';

const PhotoContainer = props => {

    const results = props.data.photo;
    console.log(results)
    let photos = results.map(picture => 
        <Photo url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id}/>
    );
  
    return (
      <div className='photo-container'>
          <h2>Results</h2>
          <ul>
           {photos}
          </ul>
      </div> 
    )

}

export default PhotoContainer; 