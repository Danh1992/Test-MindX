import React from 'react';
import "./Style.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="Header">
      <h1> SHOPPE</h1>
      <Link to = {"/"}>Home</Link>
      <Link to = {"/About"}>About</Link>
      <Link to = {"/Contact"}>Contact</Link>
      <Link to = {"/Project"}>Project</Link>
    </div>
  )
}

export default Header;