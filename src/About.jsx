import React from 'react';
import Common from './Common';
import drago from '../src/Images/dragon2.png';

const Home = ()=>{
    return(
        
          
      <Common
      name="Welcome to About Page "
      img = {drago}
      visit = "/contact"
      btnname="Contact Now"
      />

    )
}

export default Home;