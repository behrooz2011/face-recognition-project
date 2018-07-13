import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInput,onButton})=>{
	return (
		<div>
				<p className=' tc f3 white '>
				{'the Artificial Intelligince used here, can detect human face.Copy and paste the url of an image and give it a try !'}
				</p>
		


		<div className='center'>
				<div className='form center pa4 br1 shadow-5'>
						<input className='f4 pa2 w-70 center' type='text' onChange={onInput}/>
						<button className='w-30 grow f5 link ph3 pv2 white bg-light-purple'
						onClick={onButton}>Detect</button>
				</div>
		     </div>
         </div>
 

		

	
		);
}
export default ImageLinkForm;