import React from "react";
import header from "./images/header-bg.jpg";
import HeaderName from "./images/logo-2.png";
import Address from "./images/1.png";
import Phone from "./images/2.png";
import Mail from "./images/3.png";
import './App.css';


export function Navbar() {
  return (
    <div>
      <header className="App-header">
        <div className="upNav">
          <div className="Address">
            <img src={Address} alt="" />
            145 street road new york</div>
          <div className="Phone">
            <img src={Phone} alt="" />
            +71 7845128956</div>
          <div className="Mail">
            <img src={Mail} alt="" />
            demo@hmail.com</div>
        </div>

        <div className="headername">
          <img src={HeaderName} alt="" />
        </div>

        <img src={header} alt="" />

        <nav>
          <div className="container-fluid">
            <a className="navbar-brand" href="home">Home</a>
            <a className="navbar-brand" href="about">About</a>
            <a className="navbar-brand" href="travel">Travel</a>
            <a className="navbar-brand" href="blog">Blog</a>
            <a className="navbar-brand" href="footer">Contact</a>
          </div>
        </nav>
      </header>
    </div>
  )
}
