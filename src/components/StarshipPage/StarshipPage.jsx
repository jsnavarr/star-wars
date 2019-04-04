import React from 'react';
// import mapStyle from './map-style';

const StarshipPage = (props) => {
    return (
      <div className="ship-button">
        <div>
          Name: {props.location.state.starship.name} 
        </div>
        <div>
          Model: {props.location.state.starship.model} 
        </div>
      </div>
    )
}

export default StarshipPage;