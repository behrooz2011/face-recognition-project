import React from 'react';
import Tilt from 'react-tilt';
import AI from './AI.gif'
import './Logo.css';

const Logo =()=>{
	return (

		<div className='ma4 mt0'>

			 <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 75, width: 150 }} >
			 <div className="Tilt-inner "> 
			 <img style={{paddingTop: '0px'}} alt='logo' src={AI}/> 
		 </div>
		</Tilt>

		</div>

		

	
		);
}
export default Logo;