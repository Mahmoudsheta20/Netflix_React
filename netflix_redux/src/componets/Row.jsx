import React, {useState, useEffect} from 'react'
import axios from './axios';

// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





// import required modules


import movieTrailer from 'movie-trailer'




import './row.css';
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({titel, fetchUrl, isLargeRow}) => {

const [movise, setmovise] = useState([]);
const [trailerurl, settrailer ] = useState("");

useEffect(()=>{

async function fetchData(){
const requst = await axios.get(fetchUrl);
setmovise(requst.data.results)

return requst

}
fetchData()


}, [fetchUrl])

const opts = {
height:"390",
width:"100%",


};
const handel = (movie)=>{
  if(trailerurl){
    settrailer('');

  }
  else{
    movieTrailer(movie?.name || "")
    .then((url)=>{
const urlparams = new URLSearchParams(new URL(url).search)

 settrailer(urlparams.get('v')) 

    })
    .catch((error) => console.log(error))
  };
};

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay:true,

  
};


  return (
    
    <div className='row'>
        <h2>{titel}</h2>
 
        
   
    

  
<Slider {...settings}>

 
            {movise.map(movie =>(
                
               

        <div className='row_name'>
          <img   className={`row_postr ${isLargeRow && "row_posterlarg"}`}
                 src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                 alt={movie.name} 
                 key= {movie.id}/>
                
                <p>{movie?.title || movie?.name || movie?.original_name}</p>
        </div>
                
                 
         
              
             
                 
               ) ) } 
               </Slider>
               
               </div>
      
    
    
       


 

        

            
    
       
        
 
      
        
  )
}

export default Row