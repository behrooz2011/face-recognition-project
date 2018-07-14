import React from 'react';


// const Signin =({y,reg})=>{
// 	return (

// 		<article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
// 		<main className="pa4 white-80">
//   <form className="measure ">
//     <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//       <legend className="f4 fw6 ph0 mh0">Sign In</legend>
//       <div className="mt3">
//         <label className="db fw6 lh-copy f6" for="email-address">Email</label>
//         <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
//       </div>
//       <div className="mv3">
//         <label className="db fw6 lh-copy f6" for="password">Password</label>
//         <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
//       </div>
  
//     </fieldset>
//     <div className="">
//       <input onClick={y} className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
//     </div>
//     <div className="lh-copy mt3">
//       <a onClick={reg} type='submit' className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" value='Register'>Register</a>

//     </div>
//   </form>
// </main>
// </article>

 

// );
// }




//let's make this component smart using state:
//connecting to backend (a):
class Signin extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }

   onEmailChange = (event)=>{
    this.setState({signInEmail:event.target.value});
  }
  onPasswordChange = (event)=>{
    this.setState({signInPassword:event.target.value});
  }


    onSubmitSignIn = (event) => {
      event.preventDefault();
    
     
      
      fetch('https://secure-cove-98475.herokuapp.com/signin',{
        method:'post',
        headers:{'Content-Type':'application/json','Accept': 'application/json'},
        body:JSON.stringify({
          email:this.state.signInEmail,
          pass:this.state.signInPassword
        })
      })
      .then(response=>response.json())
      .then(data=>{
        
        if(data.email===this.state.signInEmail){
      this.props.y() ;
       }
      
      })   
  

 
  
}
//also take into account that your button is a form submmiter, so it will fire an event 
//to submit the form and then refresh the page. so you also have to add the following on your onSubmitSignIn

  // onSubmitSignIn = (e) => {
  //   e.preventDefault();  // this will stop the propagation of the event.
  //   console.log(this.state); // this will log your state.
  //   this.props.y(); // this will call your y function from the parent.
  // }; 
   
  
  

  render(){
return(

   <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
   <main className="pa4 white-80">
  <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>

      <div className="mt3">
         <label className="db fw6 lh-copy f6" >Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email"
       name="email-address"  
       id=""
       onChange={this.onEmailChange}/>

      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
         type="password" 
         name="password" 
          id="password"
          onChange={this.onPasswordChange}/>
      </div>
  
    </fieldset>
    <div className="">
      <input  className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" 
      type="submit"
       value="Sign in"
       id="clicking"
       onClick={this.onSubmitSignIn} 
       
        
      
       />
    </div>
    <div className="lh-copy mt3">
      <a onClick={this.props.reg} type='submit' 
      className="b ph3 pv2 input-reset ba white-80 b--black bg-transparent grow pointer f6 dib" value='Register'>Register</a>

    </div>
  </form>
</main>
</article>

 

);
}

}
 




export default Signin;