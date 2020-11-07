import React from 'react';
import { NavLink } from 'react-router-dom';


const Card=(props)=>{
    return(
        <>
            <div id="cardid"className="col-md-4 col-10 mx-auto">
                            <div className="card" >
                                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{props.title}</h5>
                                    <p class="card-text">{props.text}</p>
                                    <NavLink to="/about" class="btn btn-outline-dark">Start</NavLink>
                                </div>
                            </div>
                            
            </div>

        </>

    )
}

export default Card;