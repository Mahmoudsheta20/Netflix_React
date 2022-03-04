import React,{useState, useEffect} from 'react'
import logo from '../assest/Netflix.png'
import avtar  from '../assest/avtar.png'
import './navbar.css'
const Navbar = () => {
const [show, handelshow] = useState(false)

useEffect(()=>{
window.addEventListener("scroll", ()=>{

if(window.scrollY > 100){
handelshow(true);

}
else handelshow(false);
});
 return ()=>{
     window.removeEventListener("scroll")
 };


}, [])




  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src={logo} alt="netflix" />
        <img className='nav_avtar' src={avtar} alt="" />

    </div>
  )
}

export default Navbar