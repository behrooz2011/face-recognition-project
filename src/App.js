import React, { Component } from 'react';
// import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
// import logo from './logo.svg';/deleted!
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ImageRecog from './components/ImageRecog/ImageRecog';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

// import Particles from './components/Particles/Particles';

import './App.css';


// const Clarifai = require('clarifai'); No need to this syntax ,becauase we're importing in above

// const app = new Clarifai.App({
//  apiKey: 'b5c094f100df42e0a2a16a9e24effa9e'
// });




const x= {"particles": {
    "number": {
      "value": 1000,
      "density": {
        "enable": true,
        "value_area": 7000
      }
    },
    }
  }


 const initialState={
   
    input:'',
    imageUrl:'',
    box:{},
    route:'signin',
    /* a new obj for getting user profile */
    user:{
      id:'',
      name:'',
      email:'',
      entries:0,
      joined:''
    }
  
 } 

class App extends Component {

constructor(){
  super();
  this.state= initialState;/* to avoid route remaining mess from the previous user{
    input:'',
    imageUrl:'',
    box:{},
    route:'signin',
    /* a new obj for getting user profile */
    /*user:{
      id:'',
      name:'',
      email:'',
      entries:0,
      joined:''
    }
  } */
}

/*defining the new loadUser function used in register.js*/
loadUser=(data)=>{
  this.setState({user:{ 
    id:data.id,
      name:data.name,
      email:data.email,
      entries:0,
      joined:data.joined

  }})

}

//Connecting to backend(a):test 
// componentDidMount(){
//   fetch('http://localhost:3001')
//   .then(response=>response.json())
//   .then(console.log)
// }
//connecting to backend(b)

calculationFaceLocation=(data)=>{
const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;// percent of image
const image=document.getElementById('inputimage');
const width=image.width;
const height=image.height;
console.log("face width and height respectively" , width , height );
return {
 
  topRow:clarifaiFace.top_row*height,
  rightCol:width-(clarifaiFace.right_col*width),
  bottomRow:height-(clarifaiFace.bottom_row*height),
   leftCol:clarifaiFace.left_col*width
}

}
//here are clarifai info about bounding_box:
  // "bounding_box": {
  //               "top_row": 0.22296476,
  //               "left_col": 0.6717238,
  //               "bottom_row": 0.33909792,
  //               "right_col": 0.74911636
  //             }




  displayFaceBox =(box2)=>{
    console.log("4 mokhtasate khoord shode va bedast aamade az return e bala ", box2);
  this.setState({box:box2});
  }


onInputChange=(event)=>{
  this.setState({input:event.target.value})
}



onSubmit=()=>{
  console.log('click');
    const stylex=document.getElementById('stylex').style;
   console.log(" what I get in style: " , stylex);
  this.setState({imageUrl:this.state.input});
  /* bad az hazfe taabe e predict va app.models,
  dastoore payin ra ezafe karim. */

  fetch('https://secure-cove-98475.herokuapp.com/imageurl',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      input:this.state.input
    })
  })
  .then(response=>response.json())



  /*app.models.predict(Clarifai.FACE_DETECT_MODEL,
 this.state.input)*/.then(

    // function(response) {
    //  console.log(response.outputs[0].data.regions[0].region_info.bounding_box); // do something with response
    // },
    // function(err) {
    //  // console.log(err) // there was an error
    // }
    response=>this.displayFaceBox(this.calculationFaceLocation(response))
    // console.log("response from localhost:30001/imageurl and fetch : ",response);
    )
    .catch(err=> console.log(err))


  
}



onSignin=()=>{
  this.setState({route:'/'})
}

onSignout=()=>{
  // this.setState({route:'signin'})
  this.setState(initialState);
}
regFunction=()=>{
  this.setState({route:'registering'})
}

  render(){
    return (
    <div className="App">
        <Particles className='particles'  
        params={x}

        />
        {this.state.route==='registering'
        ?<Register y={this.onSignin} loadUser={this.loadUser} />
        :<div>

                     <Navigation z={this.onSignout}/>
                     
                      {this.state.route==='signin'
                          ?<Signin  y={this.onSignin} reg={this.regFunction} /> 
                          :   <div><Logo/>
                              <Rank/> 
                              <ImageLinkForm 
                               onInput={this.onInputChange}
                                onButton={this.onSubmit}/>
                              <ImageRecog boxer={this.state.box} pic={this.state.imageUrl}/>

                              </div>
                          }
            </div>
          }
              </div>
        

    


       
     
    
  );  
  
}  } 

export default App;