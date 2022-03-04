import React, {useState, useEffect} from 'react'
import axios from './axios';
import'./banner.css'

const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = ({ fetchUrl, isLargeRow}) => {

const [movise, setmovise] = useState([]);

useEffect(()=>{

async function fetchData(){
const requst = await axios.get(fetchUrl);
setmovise(requst.data.results[Math.floor(Math.random() * requst.data.results.length - 1)])

return requst

}
fetchData()

}, [fetchUrl])
console.log(movise)
function truncate(str, n){
    return str?.length > n ? str.substr(0, n -1 )+ '...' :str
}

  return (
  <header className='banner'
  style={{backgroundSize:"cover",
  backgroundImage: `url(${base_url}${movise?.backdrop_path})`,
  backgroundPosition: "center center"
}}
  
  >
      <div className="banner_contents">
<h2 className='banner_titel' >{movise?.title || movise?.name || movise?.original_name}</h2>
<div className="banner_butons">
    <button className="banner_button">play</button>
    <button className="banner_button">my list</button>
</div>
<h1 className="banner_description">{truncate( movise?.overview, 150)}</h1>

      </div>
      <div className="banner_fadebottom"></div>
  </header>
  )
}

export default Banner