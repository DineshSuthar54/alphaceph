import React from 'react';
import drago from '../src/Images/dragon2.png';
import Common  from './Common';
const Home = ()=>{
    return(
        
      <Common
      name="Grow your business with "
      img = {drago}
      visit = "/service"
      btnname="Get Started"
      />

    )
}

export default Home;