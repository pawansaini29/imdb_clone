import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
    <div className="header">
        <div className="headerleft">
            <Link to="/"><img  className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb-logo" /></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}} > <span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}} > <span>Top Related</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}} > <span>Upcoming</span></Link>
        </div>
        <div className="headerRight">
          <button>Login / Signup</button>
        </div>
    </div>
    </div>
  )
}

export default Header;