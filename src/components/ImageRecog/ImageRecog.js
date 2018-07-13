import React from 'react';
import './ImageRecog.css';

const ImageRecog =({pic,boxer})=>{
	return (
		<div className='center ma'>
		<div className='absolute mt3 mb3' >

		
		<img id='inputimage' alt='' src={pic} width='700px' height='auto'/>
		
		<div id='stylex' className='bounding-box' style={{top:boxer.topRow, right:boxer.rightCol, bottom:boxer.bottomRow, left:boxer.leftCol}}  ></div>
         
		</div>
		</div>
		
		

		

	
		);
}
export default ImageRecog;

// top:268.18159375px;
// 		right:128.6852px;
// 		bottom:156.38511000000005px;
// 		left:120.766926px;
//  