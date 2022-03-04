import React, {useState} from 'react'
import "./login.css"
import SingIn from './SingIn';


const Login = () => {
const [signin, setsignin] = useState(false);


console.log(signin)


  return (
    <div className='login'>
    <div className="login_background">
    <img className='login_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        
<button className='login_button' onClick={() => setsignin(true) } > sing in</button>

<div className="login_gradient"></div>

 <div className="login_body">

     {signin ? <SingIn/> :
     <>
     <h1>Unlimited movies, TV shows, and more.</h1>

<h2>Watch anywhere. Cancel anytime.</h2>
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
 <div className="login_input">
    <form >

<input type="email"  placeholder='Email address' />
<button 
onClick={()=> setsignin(true)}
className='login_submit'>GET STARTED</button>


    </form>
    
</div> 





     
     </>
     }

 </div> 

        </div>    
    
    </div>
  )
}

export default Login