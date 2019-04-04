import React from 'react';
import { Link } from 'react-router-dom';
import './StarShips.css';

function concat (N, S){
    return N.toString()+S;
}

const starShips = (props) => (
    <div className="all-ships">
        {props.starShips.map((starship) =>
            starship.results.map((ss, idx)=>
                <div key={idx}>
                    <Link className='btn' to={{
                        pathname: concat("/starship/", idx),
                        state: { starship: ss }
                    }}
                    >
                    <div className="ship-button">
                        {ss.name}
                    </div>
                    </Link>
                  </div>
            )
        )};
    </div>
);
      

export default starShips;