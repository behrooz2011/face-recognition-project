import React from 'react';

const Navigation =({z})=>{
	return (

		<nav style={{display:'flex', justifyContent:'flex-end'}}>
		<p onClick={z} className='f3 link dim white underline pa3 pointer'> Sign Out! </p>
		</nav>


	
		);
}
export default Navigation;