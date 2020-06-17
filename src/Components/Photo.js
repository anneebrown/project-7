//responsible for displaying each picture element that is returned

import React from 'react'; 

const Photo = props => (
    <li>
        <img src={props.url} alt="" />
    </li>
)

export default Photo;