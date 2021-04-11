import React from 'react'
import './card.css';
const Card = (props) => {


    
    return(
        <div>
            
        <div className="tarjeta">
            <div className="hexagon">
                        <div className="hexagon-shape">
                            <a href='Fullpage2'><img src={props.logo} alt="ft"/></a>
                            
                        </div>
                    </div>
                    <div className="materia">
                
                    <h4>{props.name}</h4>
                            
                    </div>

        </div>    

        </div>
    );
}

export default Card