import React, { useRef } from 'react'
import { auth } from '../firebase';
import './singin.css'
const SingIn = () => {

    const emailref = useRef(null);
    const passwordref = useRef(null);
    const register = (e)=>{
        e.preventDefault();
        

        auth.createUserWithEmailAndPassword(
emailref.current.value,
passwordref.current.value

        ).then((authiser)=>{
console.log(authiser)
        }).catch((error)=>{
            alert(error.message)
        });
    }

    const signin = (e)=>{
        e.preventDefault();
auth.signInWithEmailAndPassword(emailref.current.value,
    passwordref.current.value).then((authiser)=>{
        console.log(authiser)
                }).catch((error)=>{
                    alert(error.message)
                });

    }
  return ( 
    <div className='singin'>

<form >
<h1>Sign In</h1>
<input ref={emailref} type="email" placeholder='Email' />
<input ref= {passwordref} type="password"  placeholder='Password' />
<button type='submit'onClick={signin} >Sign In</button>
<h4 onClick={register}><span>New to Netflix</span> ?Sign Up now </h4>

</form>

    </div>
  )
}

export default SingIn