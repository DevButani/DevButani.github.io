import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from './logo.jpg';
import React from 'react';

const Layout = () => {
    const [logotext, setlogotext] = React.useState(true)
    const text1="Hi There!"
    const text2="Welcome to Diligent Study Group!"
    function clickhandler() {
    setlogotext(!logotext)
    }
  return (
    <>
      <nav className="navbar">
        <div className="logobox">
          <img onClick={clickhandler} className="logo" src={logo} alt="logo"/>
          <div className="logotextbox"><p>{logotext? text1:text2}</p></div>
        </div>
        <ul>
          <li>
            <Link to="Website/">Home</Link>
          </li>
          <li>
            <Link to="Website/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="Website/about">About</Link>
          </li>
          <li>
            <Link to="Website/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
