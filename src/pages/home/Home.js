import React, { useEffect, useState } from 'react'
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, []);


  const[num, setNum] = useState(0);

  const add=()=>{
    setNum(num+1);
  };
  const dec=()=>{
    setNum(num-1);
  };

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className='posterImage__rating'>
                      {movie ? movie.vote_average : ""}
                      <i className='fas fa-star'>{" "}</i>
                    </span>
                  </div>
                  <div className="posterImage__description">{movie?movie.overview:" "}</div>
                </div>
              </Link>
            ))
          }

        </Carousel>
        <MovieList/>
      </div>
    </>
  )
}

export default Home;