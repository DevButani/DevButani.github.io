import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from './logo.jpg';
import React from 'react';

function Layout() {
    const [logotext, setlogotext] = React.useState(true)
    const text1="Hi There!"
    const text2="Welcome to Diligent Study Group!"
    function clickhandler() {
    setlogotext(!logotext)
    }
    const [active, setactive] = React.useState(1)
    const click1 = () => {setactive(1)}
    const click2 = () => {setactive(2)}
    const click3 = () => {setactive(3)}
    const click4 = () => {setactive(4)}
  return (
    <>
      <nav className="navbar">
        <div className="logobox">
          <img onClick={clickhandler} className="logo" src={logo} alt="logo"/>
          <div className="logotextbox"><p>{logotext? text1:text2}</p></div>
        </div>
        <ul>
          <li>
            <Link onClick={click1} className={(active===1)? "active":""} to="Website/">Home</Link>
          </li>
          <li>
            <Link onClick={click2} className={(active===2)? "active":""} to="Website/blogs">Blogs</Link>
          </li>
          <li>
            <Link onClick={click3} className={(active===3)? "active":""} to="Website/about">About</Link>
          </li>
          <li>
            <Link onClick={click4} className={(active===4)? "active":""} to="Website/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;