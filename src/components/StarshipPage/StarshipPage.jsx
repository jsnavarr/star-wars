import React from 'react';
import {Link} from 'react-router-dom';
import './StarshipPage.css';

const StarshipPage = (props) => {
    return (
      <div>
        <div className="ship-button">
          <div>
            Name: {props.location.state.starship.name} 
          </div>
          <div>
            Model: {props.location.state.starship.model} 
          </div>
        </div>
        <div className="btn go-back-btn">
          <Link className='back-home btn btn-default btn-sm' to='/'>Go Back</Link>
        </div>
      </div>
    )
}

export default StarshipPage;