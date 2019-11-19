
import React from 'react';

import {    
    Link
  } from "react-router-dom";

export default function Footer(){
    return (
  
      <div className="Nav-bar" id="Footer-nav-bar">
        <nav>        
          FOOTER   
          <Link to="/"> Home </Link>        
          <Link to="/posts"> Posts </Link>
          <Link to="/users"> Users </Link>
  
          {/* Other Footer Text */}
        </nav>
      </div>
    ) 
  }