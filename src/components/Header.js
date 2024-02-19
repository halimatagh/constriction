import React from "react";
import "../styles/Heade.css";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        We<span>Build</span>
      </a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#services">services</a>
        <a href="#projects">projects</a>
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </nav>

      {/* <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="info-btn" className="fas fa-info-circle"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="login-btn" className="fas fa-user"></div>
      </div> */}

      <form action="" className="search-form">
        <input
          type="search"
          name=""
          placeholder="search here..."
          id="search-box"
        />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>

      <form action="" className="login-form">
        <h3>login form</h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <div className="flex">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">remember me</label>
          <a href="#">forgot password?</a>
        </div>
        <input type="submit" value="login now" className="btn" />
        <p>
          don't have an account <a href="#">create one!</a>
        </p>
      </form>
    </header>
  );
}
export default Header;
