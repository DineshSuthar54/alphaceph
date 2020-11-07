import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props)=>{
    return(
        
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name}<strong id="brand_name_home">AlphaCeph</strong></h1>
                        <h2 className="my-3">We are the team of talented developers</h2>
                        <div className="my-3" className='btn-home'>
                            <NavLink className="btn-get-started" to={props.visit} >{props.btnname}</NavLink> 
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.img} className="img-fluid-animated" alt="Unable"/>
                    </div>
                    </div>
                </div>

            </div>

        </div>

       </section>
    )
}

export default Common;