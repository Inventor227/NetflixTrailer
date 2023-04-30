import React ,{useState,useEffect} from 'react'
import axios from './axios'
import requests from "./requests"
import "./Banner.css"
function Banner() {
    const [movie,setMovies]=useState([]);
    useEffect(()=>{
async function fetchdata()
{
    const request=await axios.get(requests.fetchNetflixOriginals)
setMovies(
  request.data.results[
    Math.floor(Math.random()*request.data.results.length)
  ]  

)
return requests;
}
fetchdata();
    },[]    )
     function truncate(str,n) {
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }
  return (
    <header className="banner"
    style={
{
    backgroundSize:"cover",
    backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
    )`,
    backgroundPosition:"center center"
}

    }>
      <div className="banner-contents">
<h1 className='banner-title'>
    {movie?.title || movie?.name || movie?.originalname}
</h1>
<div className="banner-buttons">
<button className="banner-button">PLAY</button>
<button className="banner-button">MY LIST</button>
<h1 className="banner-description">
    {truncate(movie?.overview,150)}
</h1>
</div>
      </div>
    </header>
  )
}

export default Banner
