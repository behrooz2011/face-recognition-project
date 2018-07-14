// import React from 'react';

// const Register =({y})=>{
// 	return (

// 		<article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
// 		<main className="pa4 white-80">
//   <form className="measure ">
//     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//       <legend className="f4 fw6 ph0 mh0">Registeration Form</legend>

//       <div className="mt3">
//         <label className="db fw6 lh-copy f6" for="name">Your Name: </label>
//         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//         type="text" name="email-address"  id="email-address"/>
//       </div>


//       <div className="mv3">
//         <label className="db fw6 lh-copy f6" for="password"> Your Password:</label>
//         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//         type="password" name="password"  id="password"/>
//       </div>
  
//     </fieldset>
//     <div className="">
//       <input onClick={y} className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"/>
//     </div>
    
//   </form>
// </main>
// </article>



	
// 		);
// }
// export default Register;





//Let's make it smart and write it in class format:
import React from 'react';

class Register extends React.Component{



//copy from signin:
constructor(props){
    super(props);
    this.state={
      email:'',
      pass:'',
      name:''
    }
  }


onName = (event)=>{
    this.setState({name:event.target.value});
  }



   onEmailChange = (event)=>{
    this.setState({email:event.target.value});
  }
  onPasswordChange = (event)=>{
    this.setState({pass:event.target.value});
  }




    onSubmitSignIn = (event) => {
      event.preventDefault();
    
     
      
      fetch('https://secure-cove-98475.herokuapp.com/register',{
       method:'post',
        headers:{'Content-Type':'application/json','Accept': 'application/json'},
        body:JSON.stringify({
         email:this.state.email, /*change here*/ 
          pass:this.state.pass , /*change here*/
          name:this.state.name 
        })
      })
      .then(response=>response.json())
      .then(user=>{
        if(user.id)/*if we get a user back */{
          console.log(user.email);
      this.props.loadUser(user) ;  
      /* a new function which needs to be defined*/
      /* bcz this is somethin that the whole 
      app needs it,we're gonna put it 
      in the app so let's go to app.js and create it*/

      this.props.y() ;
       }
      
      })   
  

 
  
}
render(){

  return(

    <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 white-80">
  <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Registeration Form</legend>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="name">Your Name: </label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" name="email-address"  id="email-address"
        onChange={this.onName}/>
      </div>

   <div className="mt3">
         <label className="db fw6 lh-copy f6" >Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email"
       name="email-address"  
       id="email-address"
       onChange={this.onEmailChange}/>
       </div>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password"> Your Password:</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="password" name="password"  id="password"
        onChange={this.onPasswordChange}/>
      </div>
  
    </fieldset>
    <div className="">
      <input onClick={this.onSubmitSignIn} 
      className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"/>
    </div>
    
  </form>
</main>
</article>



  
    );




}
}

export default Register;
